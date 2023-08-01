import { SupabaseClient } from "@supabase/auth-helpers-nextjs"

export default async function getUserByApiKey(supabase: SupabaseClient, key: string){
    const {data: apiKeys } = await supabase.from("api_keys").select(`
        user_id (
            subscription_tier (
                remove_branding
            )
        )
    `).eq('key', key);

    return apiKeys?.[0];
}