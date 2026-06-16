import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  // In production, save to PostgreSQL via server/db
  return NextResponse.json({ success: true, message: "Contact form received", data: body });
}
