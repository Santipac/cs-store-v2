import { db } from "~/db";
import { product } from "~/db/schema/product";
import { publicProcedure, router } from "~/lib/trpc";
import {
	type ApiSuccessResponse,
	basePaginationQuerySchema,
} from "@cs-store/isomorphic-lib";
import { count } from "drizzle-orm";

export const productsRouter = router({
	getAllProducts: publicProcedure
		.input(basePaginationQuerySchema)
		.query(async ({ input }): Promise<ApiSuccessResponse> => {
			const { page, limit } = input;
			const offset = (page - 1) * limit;

			const [products, [{ totalCount }]] = await Promise.all([
				db.select().from(product).limit(limit).offset(offset),
				db.select({ totalCount: count() }).from(product),
			]);

			const totalPages = Math.ceil(totalCount / limit);

			return {
				success: true,
				data: {
					data: products,
					meta: {
						page,
						limit,
						total: totalCount,
						totalPages,
						hasNext: page < totalPages,
						hasPrev: page > 1,
					},
				},
			};
		}),
});
