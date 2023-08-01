import { SupabaseClient } from "@supabase/auth-helpers-nextjs"

export default async function getUserByApiKey(supabase: SupabaseClient, key: string){
    const {data: apiKeys } = await supabase.from("api_keys").select(`
        user_id (
            subscription_tier (
                remove_branding
            ),
            info
        )
    `).eq('key', key);
    const apiKey = apiKeys?.[0];

    return {
        removeBranding: apiKey?.user_id?.subscription_tier?.remove_branding,
        info: apiKey?.user_id?.info
    }
}