"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/modules/auth/hooks/use-auth";

export default function AdminPage() {
	const { user, userRole } = useAuth();

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
