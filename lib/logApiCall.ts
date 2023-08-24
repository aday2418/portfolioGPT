import { SupabaseClient } from "@supabase/supabase-js";

export default async function logApiCall(supabase: SupabaseClient, apiKey: any) {
    const { id, user_id: { id: user_id } } = apiKey;
    const { error } = await supabase.from('api_calls').insert({ api_key: id, user_id });
    console.log(error);
}