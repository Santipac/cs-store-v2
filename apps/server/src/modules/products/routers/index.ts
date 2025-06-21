import {
	type ApiSuccessResponse,
	basePaginationQuerySchema,
	createProductSchema,
	type Product,
} from "@cs-store/isomorphic-lib";
import { TRPCError } from "@trpc/server";
import { count } from "drizzle-orm";
import { db } from "~/db";
import { product } from "~/db/schema/product";
import { adminProcedure, publicProcedure, router } from "~/lib/trpc";
import { imagesProductRouter } from "./images";

export const productsRouter = router({
	images: imagesProductRouter,
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
	createProduct: adminProcedure
		.input(createProductSchema)
		.mutation(async (opts): Promise<ApiSuccessResponse<Product>> => {
			try {
				const { input } = opts;

				const [newProduct] = await db.insert(product).values(input).returning();

				if (!newProduct) {
					throw new TRPCError({
						code: "INTERNAL_SERVER_ERROR",
						message: "Failed to create product",
					});
				}

				return {
					success: true,
					data: newProduct,
					message: "Product created successfully",
				};
			} catch (error) {
				if (error instanceof TRPCError) {
					throw error;
				}

				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Failed to create product",
					cause: error,
				});
			}
		}),
});
