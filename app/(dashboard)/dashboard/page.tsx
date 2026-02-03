"use client";

import { useEffect, useState } from "react";
import { MetricCard } from "@/components/dashboard/metric-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { TransactionsTable } from "@/components/dashboard/transactions-table";
import { MetricsSkeleton } from "@/components/dashboard/metrics-skeleton";
import { MetricsOverview, Transaction } from "@/types/metrics";
import { DollarSign, ShoppingCart, Users, TrendingUp, Percent } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<MetricsOverview | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [metricsRes, transactionsRes] = await Promise.all([
          fetch("/api/metrics/overview"),
          fetch("/api/metrics/transactions?limit=8"),
        ]);

        if (!metricsRes.ok || !transactionsRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const metricsData = await metricsRes.json();
        const transactionsData = await transactionsRes.json();

        if (metricsData.success) {
          setMetrics(metricsData.data);
        }

        if (transactionsData.success) {
          setTransactions(transactionsData.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast({
          title: "Error",
          description: "Failed to load dashboard data",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  if (isLoading) {
    return <MetricsSkeleton />;
  }

  if (!metrics) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">No data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value={`$${metrics.metrics.totalRevenue.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
          change={metrics.metrics.revenueChange}
          changeType="increase"
          icon={DollarSign}
        />
        <MetricCard
          title="Total Transactions"
          value={metrics.metrics.totalTransactions.toLocaleString()}
          change={metrics.metrics.transactionsChange}
          changeType="increase"
          icon={ShoppingCart}
        />
        <MetricCard
          title="Total Customers"
          value={metrics.metrics.totalCustomers.toLocaleString()}
          change={metrics.metrics.customersChange}
          changeType="increase"
          icon={Users}
        />
        <MetricCard
          title="MRR"
          value={`$${metrics.metrics.mrr.toLocaleString()}`}
          change={metrics.metrics.mrrChange}
          changeType="increase"
          icon={TrendingUp}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <MetricCard
          title="Conversion Rate"
          value={`${metrics.metrics.conversionRate.toFixed(2)}%`}
          change={metrics.metrics.conversionChange}
          changeType="increase"
          icon={Percent}
        />
      </div>

      <RevenueChart data={metrics.revenueData} />
      <TransactionsTable transactions={transactions} />
    </div>
  );
}
