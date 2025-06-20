"use client";

import { LogOut, Settings, User as UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/modules/auth/hooks/use-auth";

export function UserMenu() {
	const router = useRouter();
	const { isAuthenticated, user, userRole, isAdmin, signOut } = useAuth();

	const handleSignOut = async () => {
		await signOut();
		// AuthProvider will handle the redirect
	};

	if (!isAuthenticated) {
		return null;
	}

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
							<Badge variant="secondary">
								{userRole === "admin" ? "Administrador" : "Cliente"}
							</Badge>
						)}
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Settings className="mr-2 h-4 w-4" />
					<span>Settings</span>
				</DropdownMenuItem>
				{isAdmin && (
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
