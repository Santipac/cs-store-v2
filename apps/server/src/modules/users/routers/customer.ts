import type { ApiSuccessResponse } from "@cs-store/isomorphic-lib";
import { clientProcedure, router } from "~/lib/trpc";

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
