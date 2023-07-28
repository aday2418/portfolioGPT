import Chatbot from "@/components/Chatbot";
import { NextRequest, NextResponse } from "next/server";
import ReactDOMServer from 'react-dom/server';

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest){
    const chatbotHtml = ReactDOMServer.renderToString(<Chatbot />);

    const res = new NextResponse(chatbotHtml);
    res.headers.set('Content-Type', 'text/html');

    return res
}