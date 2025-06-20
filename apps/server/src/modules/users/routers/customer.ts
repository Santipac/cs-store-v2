import { clientProcedure, router } from "~/lib/trpc";
import type { ApiSuccessResponse } from "@cs-store/isomorphic-lib";

export const customerRouter = router({
	getCustomerData: clientProcedure.query(({ ctx }): ApiSuccessResponse => {
		return {
			success: true,
			data: {
				message: "Data for clients",
				userRole: ctx.userRole,
			},
		};
	}),
});
