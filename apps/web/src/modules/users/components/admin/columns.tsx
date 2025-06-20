"use client";
import type { User } from "@cs-store/isomorphic-lib";
import type { ColumnDef } from "@tanstack/react-table";
import {
	ArrowUpDownIcon,
	CheckCircle2Icon,
	MoreVerticalIcon,
	XCircleIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export const columns: ColumnDef<User>[] = [
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
				Customer
				<ArrowUpDownIcon className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const user = row.original;
			return (
				<div className="flex items-center gap-3">
					<Avatar className="h-8 w-8">
						<AvatarImage src={user.image || undefined} alt={user.name} />
						<AvatarFallback>
							{user.name
								.split(" ")
								.map((n) => n[0])
								.join("")
								.toUpperCase()}
						</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<span className="font-medium">{user.name}</span>
						<span className="text-muted-foreground text-sm">{user.email}</span>
					</div>
				</div>
			);
		},
		enableHiding: false,
	},
	{
		accessorKey: "role",
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				className="h-8 px-2"
			>
				Role
				<ArrowUpDownIcon className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const role = row.original.role;
			const roleColors = {
				admin: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
				customer:
					"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
			};

			return (
				<Badge variant="outline" className={`${roleColors[role]} border-0`}>
					{role.charAt(0).toUpperCase() + role.slice(1)}
				</Badge>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: "emailVerified",
		header: "Email Status",
		cell: ({ row }) => (
			<div className="flex items-center gap-2">
				{row.original.emailVerified ? (
					<>
						<CheckCircle2Icon className="h-4 w-4 text-green-500" />
						<span className="text-sm">Verified</span>
					</>
				) : (
					<>
						<XCircleIcon className="h-4 w-4 text-red-500" />
						<span className="text-sm">Unverified</span>
					</>
				)}
			</div>
		),
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id) as string);
		},
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				className="h-8 px-2"
			>
				Joined
				<ArrowUpDownIcon className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const date = new Date(row.original.createdAt);
			return (
				<div className="text-sm">
					{date.toLocaleDateString("en-US", {
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</div>
			);
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
					<DropdownMenuItem>View Profile</DropdownMenuItem>
					<DropdownMenuItem>Send Message</DropdownMenuItem>
					<DropdownMenuItem>Edit User</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem className="text-red-600">
						Suspend User
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		),
	},
];
