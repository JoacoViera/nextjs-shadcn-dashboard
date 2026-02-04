import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { getTransactions } from "@/mock/metrics";

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

    // Get query params
    const searchParams = request.nextUrl.searchParams;
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;

    // Get transactions
    const transactions = getTransactions(limit);

    return NextResponse.json({
      success: true,
      data: transactions,
    });
  } catch (error) {
    console.error("Transactions error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
