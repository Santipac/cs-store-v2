import { db } from "@/db";
import { user } from "@/db/schema/auth";
import { adminProcedure, router } from "@/lib/trpc";
import { eq } from "drizzle-orm";
import z from "zod/v4";

export const adminRouter = router({
	getAllUsers: adminProcedure.query(async () => {
		const users = await db.select().from(user);
		return users;
	}),
	updateUserRole: adminProcedure
		.input(
			z.object({
				userId: z.string(),
				role: z.enum(["customer", "admin"]),
			}),
		)
		.mutation(async ({ input }) => {
			const updatedUser = await db
				.update(user)
				.set({ role: input.role, updatedAt: new Date() })
				.where(eq(user.id, input.userId))
				.returning();
			return updatedUser[0];
		}),
});
