import { NextResponse } from "next/server";
// import { revalidatePath } from "next/cache";

export function GET(request) {
  return NextResponse.json(
    {
      timestamp: Date.now(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
        "CDN-Cache-Control": "no-store",
        "Vercel-CDN-Cache-Control": "no-store",
      },
    }
  );

  // const { searchParams } = new URL(request.url);
  // const secret = searchParams.get("secret");
  // if (secret !== process.env.SECRET_TOKEN) {
  //   return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  // }

  // try {
  //   revalidatePath("/blog/[slug]");
  //   return NextResponse.json({ revalidated: false, now: Date.now() });
  // } catch (err) {
  //   return NextResponse.json(
  //     { message: "Error revalidating" },
  //     { status: 500 }
  //   );
  // }
}

//vercel cache clear
export const runtime = 'edge';
