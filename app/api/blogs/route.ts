import { getBlogPostsPage } from "@/app/utils/data/blogs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = Math.max(1, Number(request.nextUrl.searchParams.get("page")) || 1);
  const data = getBlogPostsPage(page);

  return NextResponse.json({ data });
}
