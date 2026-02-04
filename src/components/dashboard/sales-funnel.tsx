"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { funnelStages } from "@/mock/crm";
import { cn } from "@/lib/utils";

export function SalesFunnel() {
  const maxCount = funnelStages[0].count;

  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Sales Pipeline Funnel</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {funnelStages.map((stage, index) => {
          const width = (stage.count / maxCount) * 100;
          const colors = [
            "bg-blue-500",
            "bg-indigo-500",
            "bg-violet-500",
            "bg-purple-500",
            "bg-pink-500",
          ];
          const textColors = [
            "text-blue-700 dark:text-blue-400",
            "text-indigo-700 dark:text-indigo-400",
            "text-violet-700 dark:text-violet-400",
            "text-purple-700 dark:text-purple-400",
            "text-pink-700 dark:text-pink-400",
          ];

          return (
            <div key={stage.stage} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{stage.stage}</span>
                <span className={cn("text-sm font-semibold", textColors[index])}>
                  {stage.conversionRate}%
                </span>
              </div>
              <div className="relative h-10 overflow-hidden rounded-lg bg-muted/30">
                <div
                  className={cn(
                    "absolute left-0 top-0 flex h-full items-center justify-between px-4 transition-all duration-500",
                    colors[index],
                  )}
                  style={{ width: `${width}%` }}
                >
                  <span className="text-sm font-semibold text-white">
                    {stage.count.toLocaleString()} leads
                  </span>
                  {stage.value > 0 && (
                    <span className="text-sm font-medium text-white/90">
                      ${(stage.value / 1000).toFixed(0)}k
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Pipeline Value</span>
                <span>${stage.value.toLocaleString()}</span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
