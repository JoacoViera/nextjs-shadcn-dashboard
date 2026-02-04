"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentLeads } from "@/mock/crm";
import { MoreHorizontal, Mail, Phone } from "lucide-react";

const statusColors = {
  new: "bg-blue-500 hover:bg-blue-600",
  contacted: "bg-yellow-500 hover:bg-yellow-600",
  qualified: "bg-purple-500 hover:bg-purple-600",
  proposal: "bg-orange-500 hover:bg-orange-600",
  closed: "bg-green-500 hover:bg-green-600",
};

const statusLabels = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  proposal: "Proposal",
  closed: "Closed Won",
};

export function LeadsTable() {
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Leads</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="font-medium">{lead.company}</TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-xs text-muted-foreground">{lead.email}</div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{lead.source}</TableCell>
                <TableCell className="font-medium">${lead.value.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge className={statusColors[lead.status]}>{statusLabels[lead.status]}</Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {new Date(lead.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
