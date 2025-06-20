import { createAuthClient } from "better-auth/react";
import type { User, UserRole } from "@cs-store/isomorphic-lib";

export const authClient = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

// Utility functions for role checking on client
export const isAdmin = (role: UserRole): boolean => role === "admin";
export const isClient = (role: UserRole): boolean => role === "customer";

// Helper function to check if user has required role
export const hasRole = (
	userRole: UserRole,
	requiredRole: UserRole,
): boolean => {
	if (requiredRole === "admin") {
		return isAdmin(userRole);
	}
	return true; // customer can access client endpoints
};

// Helper function to safely get user role
export const getUserRole = (user: User | undefined): UserRole | null => {
	if (!user || !user.role) return null;
	return user.role as UserRole;
};
