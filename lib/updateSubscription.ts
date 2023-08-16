import createRouteSupabase from "./createRouteSupabase";
import routeUser from "./routeUser";
import updateStripeSubscription from "./updateStripeSubscription";
import updateSupabaseSubscription from "./updateSupabaseSubscription";

export default async function updateSubscription(productId: string) {
    const { id, stripe_id, subscription_tier} = await routeUser();
    await updateSupabaseSubscription(id, productId);
    await updateStripeSubscription(stripe_id, productId)
}