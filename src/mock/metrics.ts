import { MetricsOverview, Transaction } from "@/types/metrics";

export const mockMetricsData: MetricsOverview = {
  metrics: {
    totalRevenue: 145231.89,
    totalTransactions: 1234,
    totalCustomers: 456,
    mrr: 45000,
    conversionRate: 3.24,
    revenueChange: 12.5,
    transactionsChange: 8.3,
    customersChange: 15.7,
    mrrChange: 7.2,
    conversionChange: -2.1,
  },
  revenueData: [
    { month: "Jan", current: 42000, previous: 38000 },
    { month: "Feb", current: 45000, previous: 40000 },
    { month: "Mar", current: 48000, previous: 42000 },
    { month: "Apr", current: 51000, previous: 45000 },
    { month: "May", current: 49000, previous: 46000 },
    { month: "Jun", current: 53000, previous: 48000 },
    { month: "Jul", current: 56000, previous: 50000 },
    { month: "Aug", current: 58000, previous: 52000 },
    { month: "Sep", current: 60000, previous: 54000 },
    { month: "Oct", current: 62000, previous: 56000 },
    { month: "Nov", current: 64000, previous: 58000 },
    { month: "Dec", current: 67000, previous: 60000 },
  ],
};

export const mockTransactions: Transaction[] = [
  {
    id: "TRX-001",
    customer: "Acme Corporation",
    email: "billing@acme.com",
    amount: 5499.0,
    status: "completed",
    date: new Date("2024-02-28"),
  },
  {
    id: "TRX-002",
    customer: "TechStart Inc",
    email: "finance@techstart.com",
    amount: 3299.0,
    status: "completed",
    date: new Date("2024-02-27"),
  },
  {
    id: "TRX-003",
    customer: "Global Dynamics",
    email: "payments@globaldynamics.com",
    amount: 8999.0,
    status: "pending",
    date: new Date("2024-02-26"),
  },
  {
    id: "TRX-004",
    customer: "Innovation Labs",
    email: "admin@innovationlabs.com",
    amount: 2199.0,
    status: "completed",
    date: new Date("2024-02-25"),
  },
  {
    id: "TRX-005",
    customer: "Future Systems",
    email: "contact@futuresystems.com",
    amount: 4599.0,
    status: "failed",
    date: new Date("2024-02-24"),
  },
  {
    id: "TRX-006",
    customer: "Digital Solutions",
    email: "billing@digitalsolutions.com",
    amount: 6799.0,
    status: "completed",
    date: new Date("2024-02-23"),
  },
  {
    id: "TRX-007",
    customer: "Smart Enterprises",
    email: "payments@smartenterprises.com",
    amount: 3899.0,
    status: "pending",
    date: new Date("2024-02-22"),
  },
  {
    id: "TRX-008",
    customer: "Cloud Services Co",
    email: "finance@cloudservices.com",
    amount: 7299.0,
    status: "completed",
    date: new Date("2024-02-21"),
  },
];

export function getMetricsOverview(): MetricsOverview {
  return mockMetricsData;
}

export function getTransactions(limit?: number): Transaction[] {
  return limit ? mockTransactions.slice(0, limit) : mockTransactions;
}
