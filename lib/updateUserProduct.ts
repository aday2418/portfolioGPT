import getSupabaseAdmin from "./getSupabaseAdmin";

export default async function updateUserProduct(profileId: string, productId: string, stripeId: string) {
    const supabase = getSupabaseAdmin();
    await supabase.from("profiles").update({ 
        subscription_tier: productId,
        stripe_id: stripeId
    }).eq("id", profileId);
}