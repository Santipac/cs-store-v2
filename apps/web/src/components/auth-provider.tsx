"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/modules/auth/hooks/use-auth";
import Loader from "./loader";

interface AuthProviderProps {
	children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
	const router = useRouter();
	const pathname = usePathname();
	const { isAuthenticated, isLoading, isAdmin } = useAuth();

	useEffect(() => {
		// Wait for auth to load
		if (isLoading) return;

		const isAuthRoute = pathname.startsWith("/auth");
		const isAdminRoute = pathname.startsWith("/admin");

		// 1. Usuario NO autenticado
		if (!isAuthenticated) {
			// Puede acceder a rutas de auth y ruta pública
			if (!isAuthRoute) {
				router.push("/auth/sign-in");
			}
			return;
		}

		// 2. Usuario autenticado - NO puede estar en rutas de auth
		if (isAuthRoute) {
			// Redirige según rol: admin -> /admin, customer -> /
			const redirectPath = isAdmin ? "/admin" : "/";
			router.push(redirectPath);
			return;
		}

		// 3. Protección de rutas admin - solo admins pueden acceder
		if (isAdminRoute && !isAdmin) {
			router.push("/");
			return;
		}
	}, [isAuthenticated, isAdmin, pathname, router, isLoading]);

	// Mostrar loader mientras se verifica la sesión
	if (isLoading) {
		return <Loader />;
	}

	return <>{children}</>;
}
