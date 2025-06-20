import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChartAreaInteractive } from "@/modules/app/components/admin/chart-area-interactive";
import { DataTable } from "@/modules/app/components/admin/data-table";
import { SectionCards } from "@/modules/app/components/admin/section-cards";
import { AppSidebar } from "@/modules/app/components/admin/sidebar/app-sidebar";
import { SiteHeader } from "@/modules/app/components/admin/site-header";

import data from "./data.json";

export default function Page() {
	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)",
				} as React.CSSProperties
			}
		>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<SectionCards />
							<div className="px-4 lg:px-6">
								<ChartAreaInteractive />
							</div>
							<DataTable data={data} />
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
