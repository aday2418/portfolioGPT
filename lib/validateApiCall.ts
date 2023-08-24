import { SupabaseClient } from "@supabase/supabase-js";
import getMonthlyCalls from "./getMonthlyCalls";

export default async function validateApiCall(supabase: SupabaseClient, apiKey: any) {
    const { active, user_id: { id, subscription_tier: { messages_limit }} } = apiKey;

    const {data, count} = await getMonthlyCalls(supabase, id);

    return active && (count! <= messages_limit);
}