import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
  icon: LucideIcon;
}

export function MetricCard({ title, value, change, changeType, icon: Icon }: MetricCardProps) {
  const isPositive = changeType === "increase" && change > 0;
  const isNegative = changeType === "increase" && change < 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="mt-1 flex items-center text-xs text-muted-foreground">
          {change !== 0 && (
            <>
              {change > 0 ? (
                <ArrowUpIcon
                  className={cn(
                    "mr-1 h-4 w-4",
                    isPositive && "text-green-500",
                    isNegative && "text-red-500",
                  )}
                />
              ) : (
                <ArrowDownIcon
                  className={cn(
                    "mr-1 h-4 w-4",
                    !isPositive && change < 0 && "text-red-500",
                    isNegative && "text-green-500",
                  )}
                />
              )}
              <span className={cn(isPositive && "text-green-500", isNegative && "text-red-500")}>
                {Math.abs(change)}%
              </span>
            </>
          )}
          <span className="ml-1">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
