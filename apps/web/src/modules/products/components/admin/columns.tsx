import type { Product } from "@cs-store/isomorphic-lib";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDownIcon, MoreVerticalIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<Product>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={
						table.getIsAllPageRowsSelected() ||
						(table.getIsSomePageRowsSelected() && "indeterminate")
					}
					onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
					aria-label="Select all"
				/>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center justify-center">
				<Checkbox
					checked={row.getIsSelected()}
					onCheckedChange={(value) => row.toggleSelected(!!value)}
					aria-label="Select row"
				/>
			</div>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				className="h-8 px-2"
			>
				Product
				<ArrowUpDownIcon className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const product = row.original;
			return (
				<div className="flex items-center gap-3">
					<img
						src={product.imageUrl || "/placeholder.svg"}
						alt={product.name}
						className="h-10 w-10 rounded object-cover"
					/>
					<div className="flex flex-col">
						<span className="font-medium">{product.name}</span>
						<span className="text-muted-foreground text-sm">
							{product.weaponName} | {product.skinName}
						</span>
					</div>
				</div>
			);
		},
		enableHiding: false,
	},
	{
		accessorKey: "weaponType",
		header: "Type",
		cell: ({ row }) => {
			const type = row.original.weaponType;
			const typeColors = {
				rifle: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
				pistol: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
				sniper:
					"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
				shotgun:
					"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
				submachine_gun:
					"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
				machine_gun:
					"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
				knife: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
				gloves:
					"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
			};

			return (
				<Badge variant="outline" className={`${typeColors[type]} border-0`}>
					{type.replace("_", " ").toUpperCase()}
				</Badge>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "condition",
		header: "Condition",
		cell: ({ row }) => {
			const condition = row.original.condition;
			const conditionColors = {
				factory_new:
					"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
				minimal_wear:
					"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
				field_tested:
					"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
				well_worn:
					"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
				battle_scarred:
					"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
			};

			return (
				<Badge
					variant="outline"
					className={`${conditionColors[condition]} border-0`}
				>
					{condition.replace("_", " ").toUpperCase()}
				</Badge>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "rarity",
		header: "Rarity",
		cell: ({ row }) => {
			const rarity = row.original.rarity;
			const rarityColors = {
				consumer_grade:
					"bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
				industrial_grade:
					"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
				mil_spec:
					"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
				restricted:
					"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
				classified:
					"bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
				covert: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
				contraband:
					"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
			};

			return (
				<Badge variant="outline" className={`${rarityColors[rarity]} border-0`}>
					{rarity.replace("_", " ").toUpperCase()}
				</Badge>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "price",
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				className="h-8 px-2"
			>
				Price
				<ArrowUpDownIcon className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const price = Number.parseFloat(row.getValue("price"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(price);

			return <div className="font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.original.status;
			const statusColors = {
				available:
					"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
				sold: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
				reserved:
					"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
				pending:
					"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
				trade_locked:
					"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
			};

			return (
				<Badge variant="outline" className={`${statusColors[status]} border-0`}>
					{status.replace("_", " ").toUpperCase()}
				</Badge>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		id: "actions",
		cell: () => (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
						size="icon"
					>
						<MoreVerticalIcon />
						<span className="sr-only">Open menu</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-32">
					<DropdownMenuItem>View Details</DropdownMenuItem>
					<DropdownMenuItem>Edit Product</DropdownMenuItem>
					<DropdownMenuItem>Duplicate</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="text-red-600">
						Delete Product
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		),
	},
];
