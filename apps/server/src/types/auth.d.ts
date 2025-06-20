import type { UserRole } from "@cs-store/isomorphic-lib";

declare module "better-auth" {
	interface User {
		role: UserRole;
	}
}

declare module "better-auth/types" {
	interface User {
		role: UserRole;
	}
}
