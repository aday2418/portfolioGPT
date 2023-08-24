import { SupabaseClient } from "@supabase/auth-helpers-nextjs"

export default async function getApiKey(supabase: SupabaseClient, key: string){
    const {data: apiKeys } = await supabase.from("api_keys").select(`
        *,
        user_id (
            subscription_tier (*),
            *
        )
    `).eq('key', key);
    const apiKey = apiKeys?.[0];

    return apiKey;
}