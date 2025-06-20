import { protectedProcedure, publicProcedure, router } from "~/lib/trpc";
import { productsRouter } from "~/modules/products/routers";
import { usersRouter } from "~/modules/users/routers";

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

	users: usersRouter,
	products: productsRouter,
});

export type AppRouter = typeof appRouter;
