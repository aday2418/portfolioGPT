import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../database.types'


export default async function googleLogin(){
    const supabase = createClientComponentClient<Database>()
    
    try{
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:3000/auth/callback',
            }
        })

    } catch(e: any) {
    alert(e.message)
    }

}