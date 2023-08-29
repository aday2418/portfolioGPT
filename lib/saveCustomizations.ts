import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from '../types/supabase'

export default async function saveCustomizations(welcomeMessage: string, chatbotColor: string, removeBranding: boolean){
    const supabase = createClientComponentClient<Database>()
    const { data: {user} } = await supabase.auth.getUser()

    try{
        return await supabase
        .from("profiles")
        .update({
            welcome_message: welcomeMessage,
            chatbot_color: chatbotColor,
            remove_branding: removeBranding
        }) 
        .eq("id", user?.id)
    }catch(e: any){
        alert(e.message)
        return {
            data: null,
            error: e.message
        }
    }
    
}