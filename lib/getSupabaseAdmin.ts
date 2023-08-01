import { createClient } from '@supabase/supabase-js'

export default function getSupabaseAdmin() {
    return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE!, {
        auth: {
            persistSession: false
        }
    });
}