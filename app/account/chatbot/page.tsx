import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import PageInfo from "../PageInfo";
import { cookies } from 'next/headers'
import { Database } from '../database.types'
import Dashboard from "../Dashboard";

export default async function Page(){
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: profiles} = await supabase.from('profiles').select(`
        info,
        subscription_tier(*)
    `)

    const {
      data: { session },
    } = await supabase.auth.getSession()
    
    return(
        <PageInfo title="Chatbot Configuration"> 
            <Dashboard session={session} profile={profiles?.[0]}/>
        </PageInfo>
    )
}