import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from '../database.types'

export default async function uploadResume(resumeInfo: string){
    const supabase = createClientComponentClient<Database>()
    const { data: {user} } = await supabase.auth.getUser();

    try{
        return await supabase
        .from("profiles")
        .update({
            info: resumeInfo
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