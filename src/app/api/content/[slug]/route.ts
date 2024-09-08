import CustomCRUD from "@/lib/customCRUD";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

const defaultRoutes = ["about", "contact", "home-page"];
export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  if (!defaultRoutes.includes(slug))
    return new NextResponse(slug, { status: 404, statusText: slug });
  const db = new CustomCRUD("about");
  const res = await db.Read();
  if (res.err) {
    return new NextResponse(null, { status: 500 });
  }

  return new NextResponse(JSON.stringify(res.data?.["content"]), {
    status: 200,
  });
}

export async function POST(req: NextRequest) {}
