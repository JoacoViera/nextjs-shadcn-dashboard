"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

export const DynamicRevenueChart = dynamic(
  () => import("@/components/dashboard/revenue-chart").then((mod) => mod.RevenueChart),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-3">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-[350px] w-full" />
      </div>
    ),
  },
);

export const DynamicLeadRevenueChart = dynamic(
  () => import("@/components/dashboard/crm-kpi-cards").then((mod) => mod.LeadRevenueChart),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-3">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    ),
  },
);

export const DynamicSalesFunnel = dynamic(
  () => import("@/components/dashboard/sales-funnel").then((mod) => mod.SalesFunnel),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-3">
        <Skeleton className="h-4 w-[150px]" />
        <div className="space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-[90%]" />
          <Skeleton className="h-10 w-[80%]" />
          <Skeleton className="h-10 w-[70%]" />
          <Skeleton className="h-10 w-[60%]" />
        </div>
      </div>
    ),
  },
);

export const DynamicSalesRepPerformance = dynamic(
  () =>
    import("@/components/dashboard/sales-rep-performance").then((mod) => mod.SalesRepPerformance),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-3">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    ),
  },
);

export const DynamicChannelDistribution = dynamic(
  () =>
    import("@/components/dashboard/channel-distribution").then((mod) => mod.ChannelDistribution),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-3">
        <Skeleton className="h-4 w-[180px]" />
        <Skeleton className="h-[300px] w-full" />
      </div>
    ),
  },
);
