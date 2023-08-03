import getProduct from "./getProduct";
import getSubscription from "./getSubscription";

export default async function handleCheckoutCompleted(completed: any) {
    const { client_reference_id, customer, subscription } = completed;

    const subscriptionInfo = await getSubscription(subscription);
    const productId = subscriptionInfo.items.data[0].price.product;
}