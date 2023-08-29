import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { MessageType } from "@/types/MessageType"

export default async function callChatbot(messageHistory: MessageType[], landingPage: boolean = false){
    const fetchPath = landingPage ?  '/api/landingPageBot' : '/api/ask'
    
    const res = await fetch(fetchPath, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ messageHistory })
    })
    const response = await res.json()

    return response.data
}