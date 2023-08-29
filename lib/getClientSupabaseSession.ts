import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from '../types/supabase'

export default async function getClientSupabaseSession() {
    const supabase = createClientComponentClient<Database>();
    return await supabase.auth.getSession();
}