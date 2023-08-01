import callChatGpt from "@/lib/callChatGpt";
import getSupabaseAdmin from "@/lib/getSupabaseAdmin";
import getUserByApiKey from "@/lib/getUserByApiKey";
import routeUser from "@/lib/routeUser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const { messageHistory } = await req.json()
    const id = req.nextUrl.searchParams.get("id");

    if(id) { 
        const supabase = getSupabaseAdmin();
        const { info } = await getUserByApiKey(supabase, id)
        const data = await callChatGpt(info || "", messageHistory)
        return NextResponse.json({data})
    }
}