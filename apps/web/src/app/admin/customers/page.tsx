import type { User } from "@cs-store/isomorphic-lib";
import { CustomersTable } from "@/modules/users/components/admin/customers-table";
import rawData from "./data.json";

const data: User[] = rawData.map((user) => ({
	...user,
	role: user.role as User["role"],
	createdAt: new Date(user.createdAt),
	updatedAt: new Date(user.updatedAt),
}));

export default function CustomersPage() {
	return (
		<div className="px-4 lg:px-6">
			<div className="mb-6">
				<h1 className="font-semibold text-2xl">Customers</h1>
				<p className="text-muted-foreground">
					Manage and view all customer accounts
				</p>
			</div>
			<CustomersTable data={data} />
		</div>
	);
}
