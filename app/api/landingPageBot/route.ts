import callChatGpt from "@/lib/callChatGpt";
import routeUser from "@/lib/routeUser";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const siteInfo = "Chatfolio provides users a customizable chatbot enabling users to integrate interactive chat functionality into their portfolio websites. This service is designed to enhance user engagement and create a more dynamic and interactive experience for visitors. Users can customize the appearance, behavior, and responses of their chatbots to match their personal brand or website design. This ensures that the chatbot feels like a natural extension of the website. Chatfolio provides simple and straightforward instructions for injecting the chatbot code into a user's website. This allows even non-technical users to set up the chatbot without any hassle. Chatfolio offers 3 tiers, including the Starter tier, the Pro tier with additional features, and the Ethusiast tier. The Starter tier is free to use forever and includes 200 messages a month with a resume size limit of up to 600 words. The Pro tier is $4.99 per month and comes with features such as removing Chatfolio brand from chatbot and up to 2,000 messages a month, a resume size limit of up to 1,000 words, and the ability to customize the appearance of the chatbot. The Enthusiast tier is $19.99 per month and includes up to 10,000 messages a month, ability to remove Chatfolio brand from chatbot, and a resume size limit of up to 2,000 words. Limit your response to two sentences."
    
    const { messageHistory } = await req.json()
    const data = await callChatGpt(siteInfo, messageHistory, true)
    
    return NextResponse.json({data})
}