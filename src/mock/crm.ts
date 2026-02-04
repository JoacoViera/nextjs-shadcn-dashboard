export interface KPI {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  status: "new" | "contacted" | "qualified" | "proposal" | "closed";
  value: number;
  date: string;
  source: string;
}

export interface SalesRep {
  name: string;
  leads: number;
  closed: number;
  revenue: number;
  conversionRate: number;
}

export interface RevenueData {
  month: string;
  leads: number;
  revenue: number;
}

export interface ChannelData {
  channel: string;
  count: number;
  percentage: number;
}

export interface FunnelStage {
  stage: string;
  count: number;
  value: number;
  conversionRate: number;
}

export const kpis: KPI[] = [
  {
    label: "Total Leads",
    value: "2,847",
    change: "+12.5%",
    positive: true,
  },
  {
    label: "New Leads (30 days)",
    value: "423",
    change: "+8.2%",
    positive: true,
  },
  {
    label: "Conversion Rate",
    value: "24.8%",
    change: "+2.1%",
    positive: true,
  },
  {
    label: "Monthly Revenue",
    value: "$284,500",
    change: "+15.3%",
    positive: true,
  },
];

export const revenueData: RevenueData[] = [
  { month: "Jan", leads: 245, revenue: 198000 },
  { month: "Feb", leads: 312, revenue: 215000 },
  { month: "Mar", leads: 289, revenue: 203000 },
  { month: "Apr", leads: 356, revenue: 238000 },
  { month: "May", leads: 423, revenue: 267000 },
  { month: "Jun", leads: 498, revenue: 284500 },
  { month: "Jul", leads: 521, revenue: 298000 },
  { month: "Aug", leads: 478, revenue: 276000 },
  { month: "Sep", leads: 512, revenue: 292000 },
  { month: "Oct", leads: 589, revenue: 318000 },
  { month: "Nov", leads: 645, revenue: 345000 },
  { month: "Dec", leads: 712, revenue: 382000 },
];

export const salesReps: SalesRep[] = [
  { name: "John Smith", leads: 156, closed: 42, revenue: 89000, conversionRate: 26.9 },
  { name: "Sarah Johnson", leads: 142, closed: 38, revenue: 76500, conversionRate: 26.8 },
  { name: "Michael Chen", leads: 138, closed: 35, revenue: 72000, conversionRate: 25.4 },
  { name: "Emily Davis", leads: 125, closed: 32, revenue: 68000, conversionRate: 25.6 },
  { name: "David Wilson", leads: 118, closed: 29, revenue: 62500, conversionRate: 24.6 },
  { name: "Lisa Anderson", leads: 112, closed: 27, revenue: 58000, conversionRate: 24.1 },
];

export const channelData: ChannelData[] = [
  { channel: "Organic Search", count: 856, percentage: 30 },
  { channel: "Referral", count: 570, percentage: 20 },
  { channel: "Social Media", count: 484, percentage: 17 },
  { channel: "Email Marketing", count: 427, percentage: 15 },
  { channel: "Paid Ads", count: 399, percentage: 14 },
  { channel: "Direct", count: 111, percentage: 4 },
];

export const funnelStages: FunnelStage[] = [
  { stage: "Lead", count: 2847, value: 2847000, conversionRate: 100 },
  { stage: "Contacted", count: 1892, value: 1892000, conversionRate: 66.5 },
  { stage: "Qualified", count: 1234, value: 1234000, conversionRate: 43.3 },
  { stage: "Proposal", count: 756, value: 756000, conversionRate: 26.6 },
  { stage: "Closed Won", count: 423, value: 284500, conversionRate: 14.9 },
];

export const recentLeads: Lead[] = [
  {
    id: "1",
    name: "Acme Corporation",
    email: "john.doe@acme.com",
    company: "Acme Corp",
    status: "proposal",
    value: 45000,
    date: "2026-02-03",
    source: "Referral",
  },
  {
    id: "2",
    name: "TechStart Inc",
    email: "sarah@techstart.io",
    company: "TechStart Inc",
    status: "qualified",
    value: 28000,
    date: "2026-02-03",
    source: "Organic Search",
  },
  {
    id: "3",
    name: "Global Solutions Ltd",
    email: "mike@globalsolutions.com",
    company: "Global Solutions",
    status: "new",
    value: 62000,
    date: "2026-02-02",
    source: "Paid Ads",
  },
  {
    id: "4",
    name: "Innovate Labs",
    email: "lisa@innovatelabs.co",
    company: "Innovate Labs",
    status: "contacted",
    value: 35000,
    date: "2026-02-02",
    source: "Social Media",
  },
  {
    id: "5",
    name: "Future Systems",
    email: "david@futuresys.com",
    company: "Future Systems",
    status: "closed",
    value: 52000,
    date: "2026-02-01",
    source: "Email Marketing",
  },
  {
    id: "6",
    name: "Cloud Dynamics",
    email: "anna@clouddyn.com",
    company: "Cloud Dynamics",
    status: "proposal",
    value: 38000,
    date: "2026-02-01",
    source: "Referral",
  },
];
