"use client";

import { useEffect } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { authClient, getUserRole } from "@/lib/auth-client";
import type { User } from "@cs-store/isomorphic-lib";

export default function AdminPage() {
	const router = useRouter();
	const { data: session } = authClient.useSession();

	const user = session?.user;
	const userRole = getUserRole(user as User | undefined);

	useEffect(() => {
		// Redirect if not admin
		if (session && userRole !== "admin") {
			router.push("/dashboard");
		}
	}, [session, userRole, router]);

	if (!session) {
		return <div>Loading...</div>;
	}

	if (userRole !== "admin") {
		return <div>Redirecting...</div>;
	}

	return (
		<div className="container mx-auto py-8">
			<Card>
				<CardHeader>
					<CardTitle>Panel de Administración</CardTitle>
					<CardDescription>
						Gestión de usuarios y roles del sistema
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="rounded-lg border p-4">
							<h3 className="mb-2 font-medium">Información del Sistema</h3>
							<p className="text-muted-foreground text-sm">
								Bienvenido al panel de administración. Aquí podrás gestionar
								usuarios y roles.
							</p>
						</div>

						<div className="rounded-lg border p-4">
							<h3 className="mb-2 font-medium">Tu Información</h3>
							<p className="text-sm">Nombre: {user?.name}</p>
							<p className="text-sm">Email: {user?.email}</p>
							<p className="text-sm">
								Rol: {userRole === "admin" ? "Administrador" : "Cliente"}
							</p>
						</div>

						<div className="rounded-lg border p-4">
							<h3 className="mb-2 font-medium">Funcionalidades Disponibles</h3>
							<ul className="space-y-1 text-muted-foreground text-sm">
								<li>• Gestión de usuarios</li>
								<li>• Asignación de roles</li>
								<li>• Control de acceso</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
