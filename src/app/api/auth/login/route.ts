import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "mptc-dev-secret-change-in-production";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email === "admin@mptc.ac.in" && password === "admin123") {
    const token = jwt.sign({ email, role: "admin" }, JWT_SECRET, { expiresIn: "24h" });
    return NextResponse.json({ token, user: { email, role: "admin" } });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
