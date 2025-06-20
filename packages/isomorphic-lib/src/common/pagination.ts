import { z } from "zod/v4";

// Pagination schemas
export const paginationMetaSchema = z.object({
	page: z.number().int().positive(),
	limit: z.number().int().positive(),
	total: z.number().int().nonnegative(),
	totalPages: z.number().int().nonnegative(),
	hasNext: z.boolean(),
	hasPrev: z.boolean(),
});

export type PaginationMeta = z.infer<typeof paginationMetaSchema>;

export const paginatedResponseSchema = z.object({
	data: z.array(z.unknown()),
	meta: paginationMetaSchema,
});

export type PaginatedResponse<T = unknown> = {
	data: T[];
	meta: PaginationMeta;
};

// Common query parameters
export const basePaginationQuerySchema = z.object({
	page: z.coerce.number().int().positive().default(1),
	limit: z.coerce.number().int().positive().max(100).default(10),
});

export type BasePaginationQuery = z.infer<typeof basePaginationQuerySchema>;
