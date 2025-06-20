import {
	type ApiSuccessResponse,
	basePaginationQuerySchema,
	updateUserDto,
} from "@cs-store/isomorphic-lib";
import { count, eq } from "drizzle-orm";
import { z } from "zod/v4";
import { db } from "~/db";
import { user } from "~/db/schema/auth";
import { adminProcedure, router } from "~/lib/trpc";

export const adminRouter = router({
	getAllUsers: adminProcedure
		.input(basePaginationQuerySchema)
		.query(async ({ input }): Promise<ApiSuccessResponse> => {
			if (!input) {
				const users = await db.select().from(user);
				return {
					success: true,
					data: users,
				};
			}

			const { page, limit } = input;
			const offset = (page - 1) * limit;

			const [users, [{ totalCount }]] = await Promise.all([
				db.select().from(user).limit(limit).offset(offset),
				db.select({ totalCount: count() }).from(user),
			]);

			const totalPages = Math.ceil(totalCount / limit);

			return {
				success: true,
				data: {
					data: users,
					meta: {
						page,
						limit,
						total: totalCount,
						totalPages,
						hasNext: page < totalPages,
						hasPrev: page > 1,
					},
				},
			};
		}),
	updateUser: adminProcedure
		.input(
			z.object({
				userId: z.string(),
				...updateUserDto.shape,
			}),
		)
		.mutation(async ({ input }): Promise<ApiSuccessResponse> => {
			const { userId, ...updateData } = input;
			const updatedUser = await db
				.update(user)
				.set({ ...updateData, updatedAt: new Date() })
				.where(eq(user.id, userId))
				.returning();

			return {
				success: true,
				data: updatedUser[0],
				message: "User updated successfully",
			};
		}),
});
