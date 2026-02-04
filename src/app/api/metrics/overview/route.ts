import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { getMetricsOverview } from "@/mock/metrics";

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyToken(token);

    if (!payload) {
      return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 });
    }

    // Get metrics data
    const metricsData = getMetricsOverview();

    return NextResponse.json({
      success: true,
      data: metricsData,
    });
  } catch (error) {
    console.error("Metrics overview error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
