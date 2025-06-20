"use client";
import FeaturedList from "@/modules/landing/components/featured-list";
import Hero from "@/modules/landing/components/hero";

export default function Home() {
	return (
		<section className="min-h-screen bg-background">
			<section className="h-full py-12 md:py-20">
				<section className="container mx-auto">
					<Hero />
					<FeaturedList />
				</section>
			</section>
		</section>
	);
}
