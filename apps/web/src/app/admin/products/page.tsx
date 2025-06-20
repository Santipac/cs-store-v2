import type { Product } from "@cs-store/isomorphic-lib";
import { ProductsTable } from "@/modules/products/components/admin/products-table";
import rawData from "./data.json";

const data: Product[] = rawData.map((product) => ({
	...product,
	createdAt: new Date(product.createdAt),
	updatedAt: new Date(product.updatedAt),
})) as unknown as Product[];

export default function ProductsPage() {
	return (
		<div className="px-4 lg:px-6">
			<div className="mb-6">
				<h1 className="font-semibold text-2xl">Products</h1>
				<p className="text-muted-foreground">
					Manage your product inventory and listings
				</p>
			</div>
			<ProductsTable data={data} />
		</div>
	);
}
