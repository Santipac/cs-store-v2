import { initTRPC, TRPCError } from "@trpc/server";
import type { Context } from "./context";
import type { UserRole } from "@cs-store/isomorphic-lib";

export const t = initTRPC.context<Context>().create();

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
	if (!ctx.session) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "Authentication required",
			cause: "No session",
		});
	}
	return next({
		ctx: {
			...ctx,
			session: ctx.session,
		},
	});
});

// Middleware for role checking
const roleMiddleware = (requiredRole: UserRole) => {
	return protectedProcedure.use(({ ctx, next }) => {
		const user = ctx.session.user;
		const userRole = user.role as UserRole;

		if (requiredRole === "admin" && userRole !== "admin") {
			throw new TRPCError({
				code: "FORBIDDEN",
				message: "Insufficient permissions",
				cause: `Required role: ${requiredRole}, current role: ${userRole}`,
			});
		}

		return next({
			ctx: {
				...ctx,
				session: ctx.session,
				userRole,
			},
		});
	});
};

// Procedures for different roles
export const adminProcedure = roleMiddleware("admin");
export const clientProcedure = roleMiddleware("customer");
