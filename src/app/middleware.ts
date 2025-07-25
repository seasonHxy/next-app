// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  fetch("https://api.datadoghq.com/api/v1/series", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "DD-API-KEY": process.env.DATADOG_API_KEY!,
    },
    body: JSON.stringify({
      series: [
        {
          metric: "nuts.request.count",
          points: [[Math.floor(Date.now() / 1000), 1]],
          type: "count",
          tags: ["env:dev"],
        },
      ],
    }),
  }).catch(() => {});

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
