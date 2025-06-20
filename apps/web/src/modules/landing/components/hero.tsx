import { Search } from "lucide-react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";

export default function Hero() {
	return (
		<section className="py-12 md:py-20">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center"
				>
					<h1 className="mb-4 font-bold text-4xl md:text-6xl">
						Premium CS:GO Skins
					</h1>
					<p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl">
						Discover rare and exclusive Counter-Strike skins. Buy, sell, and
						trade with confidence.
					</p>

					{/* Search Bar */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 }}
						className="relative mx-auto max-w-md"
					>
						<Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-muted-foreground" />
						<Input
							placeholder="Search for skins..."
							className="h-12 rounded-4xl pl-10"
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
