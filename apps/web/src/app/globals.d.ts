// Global type declarations
import type { UserRole } from "@/lib/auth-client";

declare global {
	namespace BetterAuth {
		interface User {
			id: string;
			name: string;
			email: string;
			emailVerified: boolean;
			image?: string | null;
			role: UserRole;
			createdAt: Date;
			updatedAt: Date;
		}

		interface Session {
			user: User;
		}
	}
}
