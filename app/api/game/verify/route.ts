import { NextResponse } from "next/server";
import { hasGamePass } from "@/lib/web3";
import { z } from "zod";

const bodySchema = z.object({
  walletAddress: z.string().min(42).max(42),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = bodySchema.parse(json);

    const hasPass = await hasGamePass(data.walletAddress);
    return NextResponse.json({ success: true, hasPass });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown error";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}
