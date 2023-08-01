import Chatbot from "@/components/Chatbot";
import getChatbot from "@/lib/getChatbot";
import { NextRequest, NextResponse } from "next/server";
import ReactDOMServer from 'react-dom/server';

export async function GET(req: NextRequest){
    const key = req.nextUrl.searchParams.get("id"); 
    
    const chatbot = getChatbot(key!, "starter");
    const res = new NextResponse(chatbot);
    res.headers.set('Content-Type', 'text/javascript');

    return res
}