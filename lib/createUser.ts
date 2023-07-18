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

        if(error) {
            throw error
        }

        if (data.user) {
            const {user} = data;

            const { error: insertError } = await supabase
                .from('profiles')
                .insert({
                    id: user.id,  // user id from the auth.users table
                    username: username,
                    email: email,
                });
    
            // Error handling for profile insert
            if (insertError) {
                console.error('Error inserting profile:', insertError);
                return;
            }
    
            console.log('User signed up and profile created:', user);
        }
    } catch(e) {
        console.log(e)
        alert(e.message)
    }

}