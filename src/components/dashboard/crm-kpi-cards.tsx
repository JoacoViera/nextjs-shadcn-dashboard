"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, DollarSign, Percent } from "lucide-react";
import { kpis, revenueData } from "@/mock/crm";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

export function KPICards() {
  const kpiData = [
    {
      ...kpis[0],
      icon: Users,
    },
    {
      ...kpis[1],
      icon: Users,
    },
    {
      ...kpis[2],
      icon: Percent,
    },
    {
      ...kpis[3],
      icon: DollarSign,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.label}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {kpi.positive ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={cn(kpi.positive ? "text-green-500" : "text-red-500")}>
                  {kpi.change}
                </span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function LeadRevenueChart() {
  return (
    <Card className="col-span-full lg:col-span-4">
      <CardHeader>
        <CardTitle>Lead Growth & Revenue Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              className="text-xs"
              tick={{ fill: "currentColor" }}
              tickLine={{ stroke: "currentColor" }}
            />
            <YAxis
              yAxisId="left"
              className="text-xs"
              tick={{ fill: "currentColor" }}
              tickLine={{ stroke: "currentColor" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              className="text-xs"
              tick={{ fill: "currentColor" }}
              tickLine={{ stroke: "currentColor" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
              formatter={(value?: number, name?: string) => {
                if (name === "leads") return [value?.toLocaleString() || 0, "Leads"];
                if (name === "revenue") return [`$${value?.toLocaleString() || 0}`, "Revenue"];
                return [value, name];
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="leads"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))" }}
              name="leads"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--primary) / 0.5)"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary) / 0.5)" }}
              name="revenue"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
