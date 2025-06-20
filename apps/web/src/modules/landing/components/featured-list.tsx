"use client";
import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredSkins = [
	{
		id: 1,
		name: "AK-47 | Redline",
		price: "$45.99",
		rarity: "Classified",
		image:
			"https://kzml380tpqdjgwyp3tkm.lite.vusercontent.net/placeholder.svg?height=200&width=300",
	},
	{
		id: 2,
		name: "AWP | Dragon Lore",
		price: "$2,499.99",
		rarity: "Covert",
		image:
			"https://kzml380tpqdjgwyp3tkm.lite.vusercontent.net/placeholder.svg?height=200&width=300",
	},
	{
		id: 3,
		name: "Karambit | Fade",
		price: "$1,299.99",
		rarity: "★ Covert",
		image:
			"https://kzml380tpqdjgwyp3tkm.lite.vusercontent.net/placeholder.svg?height=200&width=300",
	},
];

export default function FeaturedList() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.4 }}
			className="mb-16"
		>
			<h2 className="mb-8 text-center font-bold text-2xl">Featured Skins</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{featuredSkins.map((skin, index) => (
					<motion.div
						key={skin.id}
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 * index }}
						whileHover={{ y: -5 }}
					>
						<Card className="overflow-hidden border-2 transition-colors hover:border-primary/50">
							<CardContent className="p-0">
								<div className="relative aspect-video overflow-hidden bg-muted">
									<Image
										src={skin.image || "/placeholder.svg"}
										alt={skin.name}
										className="h-full w-full object-cover"
										height={200}
										width={300}
									/>
									<Badge className="absolute top-2 right-2">
										{skin.rarity}
									</Badge>
								</div>
								<div className="p-4">
									<h3 className="mb-2 font-semibold">{skin.name}</h3>
									<div className="flex items-center justify-between">
										<span className="font-bold text-2xl text-primary">
											{skin.price}
										</span>
										<Button size="sm">
											<ShoppingCart className="mr-2 h-4 w-4" />
											Buy
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
}
