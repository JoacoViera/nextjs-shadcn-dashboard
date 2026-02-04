"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { salesReps } from "@/mock/crm";

export function SalesRepPerformance() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Sales Representative Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesReps}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="name"
              className="text-xs"
              tick={{ fill: "currentColor" }}
              tickLine={{ stroke: "currentColor" }}
            />
            <YAxis
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
              formatter={(value?: number) => [value?.toLocaleString() || 0, ""]}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Bar
              dataKey="leads"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              name="Total Leads"
            />
            <Bar
              dataKey="closed"
              fill="hsl(var(--primary) / 0.5)"
              radius={[4, 4, 0, 0]}
              name="Closed Deals"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
