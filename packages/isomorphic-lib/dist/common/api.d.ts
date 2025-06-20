import { z } from "zod/v4";
export declare const apiSuccessResponseSchema: z.ZodObject<
	{
		success: z.ZodLiteral<true>;
		data: z.ZodUnknown;
		message: z.ZodOptional<z.ZodString>;
	},
	z.core.$strip
>;
export declare const apiErrorResponseSchema: z.ZodObject<
	{
		success: z.ZodLiteral<false>;
		error: z.ZodObject<
			{
				code: z.ZodString;
				message: z.ZodString;
				details: z.ZodOptional<z.ZodUnknown>;
			},
			z.core.$strip
		>;
	},
	z.core.$strip
>;
export declare const apiResponseSchema: z.ZodUnion<
	readonly [
		z.ZodObject<
			{
				success: z.ZodLiteral<true>;
				data: z.ZodUnknown;
				message: z.ZodOptional<z.ZodString>;
			},
			z.core.$strip
		>,
		z.ZodObject<
			{
				success: z.ZodLiteral<false>;
				error: z.ZodObject<
					{
						code: z.ZodString;
						message: z.ZodString;
						details: z.ZodOptional<z.ZodUnknown>;
					},
					z.core.$strip
				>;
			},
			z.core.$strip
		>,
	]
>;
export type ApiSuccessResponse<T = unknown> = {
	success: true;
	data: T;
	message?: string;
};
export type ApiErrorResponse = {
	success: false;
	error: {
		code: string;
		message: string;
		details?: unknown;
	};
};
export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse;
//# sourceMappingURL=api.d.ts.map
