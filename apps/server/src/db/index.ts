import { drizzle } from "drizzle-orm/node-postgres";
import * as auth from "./schema/auth";
import * as product from "./schema/product";

export const db = drizzle(process.env.DATABASE_URL || "", {
	schema: {
		...auth,
		...product,
	},
});
