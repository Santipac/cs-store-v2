import { ChartAreaInteractive } from "@/modules/app/components/admin/chart-area-interactive";
import { DataTable } from "@/modules/app/components/admin/data-table";
import { SectionCards } from "@/modules/app/components/admin/section-cards";

import data from "./data.json";

export default function Page() {
	return (
		<>
			<SectionCards />
			<div className="px-4 lg:px-6">
				<ChartAreaInteractive />
			</div>
			<DataTable data={data} />
		</>
	);
}
