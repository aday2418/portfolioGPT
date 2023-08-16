import getStripe from "./getStripe";
import getSubscriptionTier from "./getSubscriptionTier";

export default async function updateStripeSubscription(stripeId: string, productId: string) {
    const stripe = getStripe();
    const { data } = await stripe.subscriptions.list({
        customer: stripeId
    });
    const subscription = data[0];

    const { stripe_price_id } = await getSubscriptionTier(productId);

    await stripe.subscriptions.update(
        subscription.id,
        {
            proration_behavior: 'create_prorations',
            items: [{
                id: subscription.items.data[0].id,
                price: stripe_price_id,
            }],
        }
    )
}