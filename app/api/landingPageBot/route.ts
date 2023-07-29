import callChatGpt from "@/lib/callChatGpt";
import routeUser from "@/lib/routeUser";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const siteInfo = "Chatfolio is a specialized website that focuses on providing injectable code solutions for chatbots, enabling users to integrate interactive chat functionality into their portfolio websites. This service is designed to enhance user engagement and create a more dynamic and interactive experience for visitors. Users can customize the appearance, behavior, and responses of their chatbots to match their personal brand or website design. This ensures that the chatbot feels like a natural extension of the website. Chatfolio provides simple and straightforward instructions for injecting the chatbot code into a user's website. This allows even non-technical users to set up the chatbot without any hassle. Chatfolio offers two pricing tiers, including a free tier and a premium tier with additional features. The premium tier is 5 dollars a month and comes with no branding and up to 2000 messages a month. The free tier includes only 200 messages a month. If asked if the site costs, respond with no saying that the site is free to use but has options to upgrade. Limit your response to two sentances."
    
    const { messageHistory } = await req.json()
    const data = await callChatGpt(siteInfo, messageHistory)
    
    return NextResponse.json({data})
}