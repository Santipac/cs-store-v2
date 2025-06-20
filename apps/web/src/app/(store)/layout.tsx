import Header from "@/modules/app/components/header";
import Footer from "@/modules/app/components/footer";

export default function StoreLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
