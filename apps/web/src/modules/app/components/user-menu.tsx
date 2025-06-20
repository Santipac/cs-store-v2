"use client";

import { LogOut, Settings, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient, getUserRole } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import type { User, UserRole } from "@cs-store/isomorphic-lib";

export function UserMenu() {
	const router = useRouter();
	const { data: session } = authClient.useSession();

	const user = session?.user;
	const userRole = getUserRole(user as User | undefined);

	const handleSignOut = async () => {
		await authClient.signOut();
		router.push("/auth/sign-in");
	};

	if (!session) {
		return null;
	}

	const getRoleBadgeColor = (role: UserRole) => {
		return role === "admin"
			? "bg-red-100 text-red-800"
			: "bg-blue-100 text-blue-800";
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="relative h-8 w-8 rounded-full">
					<UserIcon className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<p className="font-medium text-sm leading-none">{user?.name}</p>
						<p className="text-muted-foreground text-xs leading-none">
							{user?.email}
						</p>
						{userRole && (
							<span
								className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-medium text-xs ${getRoleBadgeColor(userRole)}`}
							>
								{userRole === "admin" ? "Administrador" : "Cliente"}
							</span>
						)}
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Settings className="mr-2 h-4 w-4" />
					<span>Settings</span>
				</DropdownMenuItem>
				{userRole === "admin" && (
					<DropdownMenuItem onClick={() => router.push("/admin")}>
						<Settings className="mr-2 h-4 w-4" />
						<span>Panel de Admin</span>
					</DropdownMenuItem>
				)}
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleSignOut}>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
