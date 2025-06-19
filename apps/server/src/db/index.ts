import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema/auth";

export const db = drizzle(process.env.DATABASE_URL || "", {
	schema,
});

export type DbUser = typeof schema.user.$inferSelect;
export type DbUserInsert = typeof schema.user.$inferInsert;
