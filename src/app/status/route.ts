// app/status/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    ts: new Date().toISOString(),
    commit: process.env.COMMIT_SHA || "unknown",
  });
}
