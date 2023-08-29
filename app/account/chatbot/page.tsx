import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import PageInfo from "../PageInfo";
import { cookies } from 'next/headers'
import { Database } from '../../../types/supabase'
import Dashboard from "./Dashboard";

export default async function Page(){
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: profiles} = await supabase.from('profiles').select(`
        info,
        subscription_tier(*),
        welcome_message,
        chatbot_color,
        remove_branding
    `)
    
    return(
        <PageInfo title="Chatbot Configuration"> 
            <Dashboard profile={profiles?.[0]}/>
        </PageInfo>
    )
}