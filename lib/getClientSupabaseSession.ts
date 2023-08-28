import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from '../database.types';


export default async function getClientSupabaseSession() {
    const supabase = createClientComponentClient<Database>();
    return await supabase.auth.getSession();
}