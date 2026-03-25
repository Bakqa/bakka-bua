import { NextResponse } from "next/server";
import { settleScoreOnChain } from "@/lib/web3";
import { z } from "zod";

const bodySchema = z.object({
  walletAddress: z.string().min(42).max(42),
  score: z.number().nonnegative(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = bodySchema.parse(json);

    const txHash = await settleScoreOnChain(data.walletAddress, data.score);

    return NextResponse.json({ success: true, txHash });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown error";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}
