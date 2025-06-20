import { z } from "zod/v4";
// Common API response schemas
export const apiSuccessResponseSchema = z.object({
	success: z.literal(true),
	data: z.unknown(),
	message: z.string().optional(),
});
export const apiErrorResponseSchema = z.object({
	success: z.literal(false),
	error: z.object({
		code: z.string(),
		message: z.string(),
		details: z.unknown().optional(),
	}),
});
export const apiResponseSchema = z.union([
	apiSuccessResponseSchema,
	apiErrorResponseSchema,
]);
