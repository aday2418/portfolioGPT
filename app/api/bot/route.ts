import callChatGpt from "@/lib/callChatGpt";
import routeUser from "@/lib/routeUser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const { messageHistory } = await req.json()
    const id = req.nextUrl.searchParams.get("id");

    console.log(id);

    const data = await callChatGpt("", messageHistory)
    
    return NextResponse.json({data})
}