import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from '../database.types'

export default async function createUser(email: string, username: string, password: string) {
    const supabase = createClientComponentClient<Database>()

    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username
                }
            }
        }) 

        console.log(data)
        console.log(error)

        if(error) {
            throw error
        }
    } catch(e) {
        console.log(e)
        alert(e.message)
    }

}