import getStripe from "./getStripe";

export default async function cancelStripeSubscription(stripeId: string) {
    const stripe = getStripe();
    const { data } = await stripe.subscriptions.list({
        customer: stripeId
    });
    const subscription = data[0];

    await stripe.subscriptions.cancel(subscription.id)
}