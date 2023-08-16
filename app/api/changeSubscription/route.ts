import updateSubscription from "@/lib/updateSubscription";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const { productId } = await req.json();

    if(productId) {
        try {
            await updateSubscription(productId);
        } catch(e) {
            return new NextResponse("Encountered Error", { status: 400})
        }
    } else {
        return new NextResponse("Cannot Find Product", { status: 400})
    }
}