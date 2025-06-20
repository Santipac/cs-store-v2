import Footer from "@/modules/app/components/footer";
import Header from "@/modules/app/components/header";

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
