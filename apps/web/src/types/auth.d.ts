import type { UserRole } from "@cs-store/isomorphic-lib";

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
