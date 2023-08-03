import getStripe from "./getStripe";

export default async function getSubscription(subId: string) {
    const stripe = getStripe();

    return await stripe.subscriptions.retrieve(subId);
}