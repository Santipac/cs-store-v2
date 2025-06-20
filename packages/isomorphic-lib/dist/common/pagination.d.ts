import { z } from "zod/v4";
export declare const paginationMetaSchema: z.ZodObject<
	{
		page: z.ZodNumber;
		limit: z.ZodNumber;
		total: z.ZodNumber;
		totalPages: z.ZodNumber;
		hasNext: z.ZodBoolean;
		hasPrev: z.ZodBoolean;
	},
	z.core.$strip
>;
export type PaginationMeta = z.infer<typeof paginationMetaSchema>;
export declare const paginatedResponseSchema: z.ZodObject<
	{
		data: z.ZodArray<z.ZodUnknown>;
		meta: z.ZodObject<
			{
				page: z.ZodNumber;
				limit: z.ZodNumber;
				total: z.ZodNumber;
				totalPages: z.ZodNumber;
				hasNext: z.ZodBoolean;
				hasPrev: z.ZodBoolean;
			},
			z.core.$strip
		>;
	},
	z.core.$strip
>;
export type PaginatedResponse<T = unknown> = {
	data: T[];
	meta: PaginationMeta;
};
export declare const basePaginationQuerySchema: z.ZodObject<
	{
		page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
		limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
	},
	z.core.$strip
>;
export type BasePaginationQuery = z.infer<typeof basePaginationQuerySchema>;
//# sourceMappingURL=pagination.d.ts.map
