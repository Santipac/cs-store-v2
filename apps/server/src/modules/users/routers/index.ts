import { protectedProcedure, router } from "../../../lib/trpc";
import { adminRouter } from "./admin";
import { customerRouter } from "./customer";

export const usersRouter = router({
	admin: adminRouter,
	customer: customerRouter,
	getProfile: protectedProcedure.query(({ ctx }) => {
		return {
			user: ctx.session.user,
			message: "Your profile data",
		};
	}),
});

export type UsersRouter = typeof usersRouter;
