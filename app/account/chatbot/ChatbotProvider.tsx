'use client';

import ChatbotContext from "@/components/hooks/ChatbotContext"
import { ReactNode, useState } from "react";

export default function ChatbotProvider({ profile, children }: {profile: any, children: ReactNode}) {
    const { welcome_message, chatbot_color, remove_branding } = profile;

    const [welcomeMessage, setWelcomeMessage] = useState<string>(welcome_message);
    const [chatbotColor, setChatbotColor] = useState<string>(chatbot_color);
    const [removeBranding, setRemoveBranding] = useState<boolean>(remove_branding);

    const changeWelcomeMessage = (value: string) => {
        setWelcomeMessage(value);
    }

    const changeChatbotColor = (value: string) => {
        setChatbotColor(value);
    }

    const changeRemoveBranding = (value: boolean) => {
        setRemoveBranding(value);
    }

    return (
        <ChatbotContext.Provider value={{welcomeMessage, changeWelcomeMessage, chatbotColor, changeChatbotColor, removeBranding, changeRemoveBranding}}>
            {children}
        </ChatbotContext.Provider>
    )
}