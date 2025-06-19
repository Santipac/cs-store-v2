import { clientProcedure, router } from "@/lib/trpc";

export const customerRouter = router({
	getCustomerData: clientProcedure.query(({ ctx }) => {
		return {
			message: "Data for clients",
			userRole: ctx.userRole,
		};
	}),
});
