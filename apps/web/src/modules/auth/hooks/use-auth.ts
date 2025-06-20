import { authClient, getUserRole } from "@/lib/auth-client";
import type { User } from "@cs-store/isomorphic-lib";

/**
 * Custom hook to access authentication state and utilities
 * Provides a clean interface for components to check auth status and user roles
 */
export function useAuth() {
	const { data: session, isPending, error } = authClient.useSession();

	const user = session?.user;
	const userRole = getUserRole(user as User | undefined);

	return {
		// Auth state
		isAuthenticated: !!session,
		isLoading: isPending,
		error,

		// User data
		user,
		userRole,
		session,

		// Role checks
		isAdmin: userRole === "admin",
		isCustomer: userRole === "customer",

		// Auth actions
		signOut: authClient.signOut,
	};
}
