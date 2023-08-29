import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from '../types/supabase'

export default async function loginUser(email: string, password: string) {
    const supabase = createClientComponentClient<Database>()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if(error) {
            throw error
        }

        return(data?.session)
    } catch(e) {
        alert(e.message)
    }

}