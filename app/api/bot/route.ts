import callChatGpt from "@/lib/callChatGpt";
import getSupabaseAdmin from "@/lib/getSupabaseAdmin";
import getApiKey from "@/lib/getApiKey";
import logApiCall from "@/lib/logApiCall";
import routeUser from "@/lib/routeUser";
import { NextRequest, NextResponse } from "next/server";
import validateApiCall from "@/lib/validateApiCall";

export async function POST(req: NextRequest){
    const { messageHistory } = await req.json()
    const id = req.nextUrl.searchParams.get("id");

    if(id) { 
        const supabase = getSupabaseAdmin();
        const apiKey = await getApiKey(supabase, id);

        const isValidCall = await validateApiCall(supabase, apiKey);
        if (isValidCall) {
            const data = await callChatGpt(apiKey.user_id.info || "", messageHistory)

            // log event
            logApiCall(supabase, apiKey);

            return NextResponse.json({data})   
        }
        else {
            return NextResponse.json({error: "Rate limit reached"}, {status: 429})
        }
    }
}