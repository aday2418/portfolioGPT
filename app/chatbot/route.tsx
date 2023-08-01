import getChatbot from "@/lib/getChatbot";
import getSubscriptionByUser from "@/lib/getSubscriptionByUser";
import getSupabaseAdmin from "@/lib/getSupabaseAdmin";
import getUserByApiKey from "@/lib/getUserByApiKey";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const key = req.nextUrl.searchParams.get("id");

    if(key) {
        const supabase = getSupabaseAdmin();
        const userInfo = await getUserByApiKey(supabase, key)
        
        const chatbot = getChatbot(key, userInfo);
        const res = new NextResponse(chatbot);
        res.headers.set('Content-Type', 'text/javascript');

        return res
    }
}