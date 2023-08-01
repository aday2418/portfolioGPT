import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import PageInfo from "../PageInfo";
import { cookies } from 'next/headers'
import { Database } from '../database.types'

export default async function Page(){
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: apiKeys} = await supabase.from('api_keys').select()
    const primaryKey = apiKeys?.[0];

    return(
        <PageInfo title="API"> 
            <h1 className="text-white">API Key: {primaryKey.key}</h1>
        </PageInfo>
    )
}