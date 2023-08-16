import createRouteSupabase from "./createRouteSupabase";

export default async function getSubscriptionTier(productId: string) {
    const supabase = createRouteSupabase();
    const { data: tiers, error } = await supabase.from("subscription_tiers").select().eq("id", productId);

    return tiers?.[0]
}