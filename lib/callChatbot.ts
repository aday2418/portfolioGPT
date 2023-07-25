import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from '../database.types'

export default async function callChatbot(message: string){
    const res = await fetch('/api/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ message })
    })
    const response = await res.json()
    
    return response.data
}