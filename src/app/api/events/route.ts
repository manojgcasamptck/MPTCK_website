import { NextResponse } from "next/server";
import { events, departments, testimonials, recruiters } from "@/lib/data";

export async function GET() {
  return NextResponse.json({
    events,
    departments: departments.map(({ icon, ...d }) => d),
    testimonials,
    recruiters,
  });
}
