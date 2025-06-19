import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import * as schema from "../db/schema/auth";

// Define role types
export type UserRole = "customer" | "admin";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: schema,
	}),
	trustedOrigins: [process.env.CORS_ORIGIN || ""],
	emailAndPassword: {
		enabled: true,
	},
	secret: process.env.BETTER_AUTH_SECRET,
	baseURL: process.env.BETTER_AUTH_URL,
	user: {
		additionalFields: {
			role: {
				type: "string",
				defaultValue: "customer",
				required: true,
			},
		},
	},
});

// Utility functions for role checking
export const isAdmin = (role: UserRole): boolean => role === "admin";
export const isClient = (role: UserRole): boolean => role === "customer";

// Middleware helper for role verification
export const requireRole = (requiredRole: UserRole) => {
	return (userRole: UserRole): boolean => {
		if (requiredRole === "admin") {
			return isAdmin(userRole);
		}
		return true; // customer can access client endpoints
	};
};

export const requireAdmin = requireRole("admin");
