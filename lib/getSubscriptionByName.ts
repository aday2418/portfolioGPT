import createRouteSupabase from "./createRouteSupabase";
import getSupabaseAdmin from "./getSupabaseAdmin";

export default async function getSubscriptionByName(name: string) {
    const supabase = getSupabaseAdmin();
    const { data: tiers, error } = await supabase.from("subscription_tiers").select().eq("name", name);

    return tiers?.[0]
}