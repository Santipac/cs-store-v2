import type * as schema from "../../schema/auth";

export type DbUser = typeof schema.user.$inferSelect;
export type DbUserInsert = typeof schema.user.$inferInsert;
