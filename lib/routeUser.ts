import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";


export default async function routeUser(){
    const supabase = createRouteHandlerClient({ cookies })
    const { data: profiles, error } = await supabase.from("profiles").select()
    const profile = profiles?.[0]

    return(profile)
}