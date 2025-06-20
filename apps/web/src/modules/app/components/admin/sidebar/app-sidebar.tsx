"use client";
import {
	IconCurrencyDollar,
	IconDashboard,
	IconHelp,
	IconInnerShadowTop,
	IconPackage,
	IconSettings,
	IconShoppingCart,
	IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import type React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "@/modules/app/components/admin/sidebar/nav-main";
import { NavSecondary } from "@/modules/app/components/admin/sidebar/nav-secondary";
import { NavUser } from "@/modules/app/components/admin/sidebar/nav-user";

const data = {
	navMain: [
		{
			title: "Dashboard",
			url: "/admin",
			icon: IconDashboard,
		},
		{
			title: "Orders",
			url: "#",
			icon: IconPackage,
		},
		{
			title: "Products",
			url: "#",
			icon: IconShoppingCart,
		},
		{
			title: "Sellers",
			url: "#",
			icon: IconCurrencyDollar,
		},
		{
			title: "Customers",
			url: "#",
			icon: IconUsers,
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "#",
			icon: IconSettings,
		},
		{
			title: "Get Help",
			url: "#",
			icon: IconHelp,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<Link href="/admin">
								<IconInnerShadowTop className="!size-5" />
								<span className="font-semibold text-base">CS Store</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
		</Sidebar>
	);
}
