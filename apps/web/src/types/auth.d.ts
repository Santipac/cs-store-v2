import type { UserRole } from "../lib/auth-client";

declare module "better-auth/react" {
	interface User {
		role: UserRole;
	}

	interface Session {
		user: User;
	}
}

declare module "better-auth" {
	interface User {
		role: UserRole;
	}

	interface Session {
		user: User;
	}
}

declare module "better-auth/types" {
	interface User {
		role: UserRole;
	}

	interface Session {
		user: User;
	}
}
