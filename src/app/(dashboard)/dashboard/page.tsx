"use client";

import { KPICards, LeadRevenueChart } from "@/components/dashboard/crm-kpi-cards";
import { SalesFunnel } from "@/components/dashboard/sales-funnel";
import { SalesRepPerformance } from "@/components/dashboard/sales-rep-performance";
import { ChannelDistribution } from "@/components/dashboard/channel-distribution";
import { LeadsTable } from "@/components/dashboard/leads-table";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s what&apos;s happening with your sales today.
        </p>
      </div>

      <KPICards />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <LeadRevenueChart />
        <SalesFunnel />
        <SalesRepPerformance />
        <ChannelDistribution />
      </div>

      <LeadsTable />
    </div>
  );
}
