import createRouteSupabase from "./createRouteSupabase";

export default async function cancelSupabaseSubscription(id: string, productId: string) {
    const supabase = createRouteSupabase();
    await supabase.from("profiles").update({ 
        subscription_tier: productId,
        stripe_id: null
    }).eq("id", id);
}