import {
	protectedProcedure,
	publicProcedure,
	router,
	adminProcedure,
	clientProcedure,
} from "../lib/trpc";
import { z } from "zod";
import { db } from "../db";
import { user } from "../db/schema/auth";
import { eq } from "drizzle-orm";

export const appRouter = router({
	healthCheck: publicProcedure.query(() => {
		return "OK";
	}),
	privateData: protectedProcedure.query(({ ctx }) => {
		return {
			message: "This is private",
			user: ctx.session.user,
		};
	}),

	// Admin only endpoints
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

	// Client and admin endpoints
	getProfile: protectedProcedure.query(({ ctx }) => {
		return {
			user: ctx.session.user,
			message: "Your profile data",
		};
	}),

	// Client specific endpoints
	clientData: clientProcedure.query(({ ctx }) => {
		return {
			message: "Data for clients",
			userRole: ctx.userRole,
		};
	}),

	// Admin specific endpoints
	adminData: adminProcedure.query(({ ctx }) => {
		return {
			message: "Data for administrators only",
			userRole: ctx.userRole,
		};
	}),
});

export type AppRouter = typeof appRouter;
