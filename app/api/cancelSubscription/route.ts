import cancelSubscription from "@/lib/cancelSubscription";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        await cancelSubscription();
    } catch(e) {
        return new NextResponse("Encountered Error", { status: 400})
    }
}