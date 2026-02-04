export interface MetricCard {
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
  icon: string;
}

export interface RevenueDataPoint {
  month: string;
  current: number;
  previous: number;
}

export interface Transaction {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  date: Date;
}

export interface DashboardMetrics {
  totalRevenue: number;
  totalTransactions: number;
  totalCustomers: number;
  mrr: number;
  conversionRate: number;
  revenueChange: number;
  transactionsChange: number;
  customersChange: number;
  mrrChange: number;
  conversionChange: number;
}

export interface MetricsOverview {
  metrics: DashboardMetrics;
  revenueData: RevenueDataPoint[];
}
