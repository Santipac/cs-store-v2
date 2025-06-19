"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="border-t bg-muted/30 py-12">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					className="grid grid-cols-1 gap-8 md:grid-cols-4"
				>
					<div>
						<div className="mb-4 flex items-center space-x-2">
							<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
								<span className="font-bold text-primary-foreground text-xs">
									CS
								</span>
							</div>
							<span className="font-bold">SkinStore</span>
						</div>
						<p className="text-muted-foreground text-sm">
							The most trusted marketplace for CS:GO skins and items.
						</p>
					</div>

					<div>
						<h4 className="mb-4 font-semibold">Marketplace</h4>
						<ul className="space-y-2 text-muted-foreground text-sm">
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Buy Skins
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Sell Skins
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Trade
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Price Guide
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-4 font-semibold">Support</h4>
						<ul className="space-y-2 text-muted-foreground text-sm">
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Help Center
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Contact Us
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									FAQ
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Security
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-4 font-semibold">Legal</h4>
						<ul className="space-y-2 text-muted-foreground text-sm">
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="transition-colors hover:text-primary">
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</motion.div>

				<div className="mt-8 border-t pt-8 text-center text-muted-foreground text-sm">
					<p>&copy; 2025 SkinStore. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
