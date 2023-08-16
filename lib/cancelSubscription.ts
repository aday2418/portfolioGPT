import cancelStripeSubscription from "./cancelStripeSubscription";
import cancelSupabaseSubscription from "./cancelSupabaseSubscription";
import getSubscriptionByName from "./getSubscriptionByName";
import routeUser from "./routeUser";
import updateSupabaseSubscription from "./updateSupabaseSubscription";

export default async function cancelSubscription() {
    const { id, stripe_id } = await routeUser();
    const tier = await getSubscriptionByName("Starter");
    await cancelSupabaseSubscription(id, tier.id);
    await cancelStripeSubscription(stripe_id)
}