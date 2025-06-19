import type { UserRole } from "../lib/auth";

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
