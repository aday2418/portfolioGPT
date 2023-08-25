import callChatGpt from "@/lib/callChatGpt";
import routeUser from "@/lib/routeUser";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const { messageHistory } = await req.json()
    const user = await routeUser() 

    const data = await callChatGpt(user.info, messageHistory)
    console.log(data);
    
    return NextResponse.json({data})
}