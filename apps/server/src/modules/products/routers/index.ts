import { db } from "@/db";
import { product } from "@/db/schema/product";
import { publicProcedure, router } from "@/lib/trpc";

export const productsRouter = router({
	getAllProducts: publicProcedure.query(async () => {
		const products = await db.select().from(product);
		return products;
	}),
});
