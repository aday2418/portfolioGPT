import createRouteSupabase from "./createRouteSupabase";

export default async function updateSupabaseSubscription(id: string, productId: string) {
    const supabase = createRouteSupabase();
    await supabase.from("profiles").update({ 
        subscription_tier: productId
    }).eq("id", id);
}