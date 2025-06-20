"use client";
import { Menu, ShoppingCart, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { UserMenu } from "./user-menu";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { data: session } = authClient.useSession();

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="flex items-center space-x-2"
					>
						<div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
							<span className="font-bold text-primary-foreground text-sm">
								CS
							</span>
						</div>
						<span className="font-bold text-xl">SkinStore</span>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className="hidden items-center space-x-6 md:flex">
						<Link
							href="#"
							className="font-medium text-sm transition-colors hover:text-primary"
						>
							Home
						</Link>
						<Link
							href="#"
							className="font-medium text-sm transition-colors hover:text-primary"
						>
							Products
						</Link>
						<Link
							href="#"
							className="font-medium text-sm transition-colors hover:text-primary"
						>
							Sell
						</Link>
					</nav>

					<div className="flex items-center space-x-4">
						<Button variant="outline" size="sm" className="hidden md:flex">
							<ShoppingCart className="mr-2 h-4 w-4" />
							Cart
						</Button>
						{session ? (
							<UserMenu />
						) : (
							<Button size="sm" asChild>
								<Link href="/auth/sign-in">Sign In</Link>
							</Button>
						)}

						{/* Mobile Menu Button */}
						<Button
							variant="ghost"
							size="sm"
							className="md:hidden"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? (
								<X className="h-4 w-4" />
							) : (
								<Menu className="h-4 w-4" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="mt-4 border-t pb-4 md:hidden"
					>
						<nav className="mt-4 flex flex-col space-y-2">
							<Link
								href="#"
								className="py-2 font-medium text-sm transition-colors hover:text-primary"
							>
								Home
							</Link>
							<Link
								href="#"
								className="py-2 font-medium text-sm transition-colors hover:text-primary"
							>
								Market
							</Link>
							<Link
								href="#"
								className="py-2 font-medium text-sm transition-colors hover:text-primary"
							>
								Sell
							</Link>
							<Link
								href="#"
								className="py-2 font-medium text-sm transition-colors hover:text-primary"
							>
								About
							</Link>
						</nav>
					</motion.div>
				)}
			</div>
		</motion.header>
	);
}
