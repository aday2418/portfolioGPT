import getProduct from "./getProduct";
import getProductByStripeId from "./getProductByStripeId";
import getSubscription from "./getSubscription";
import updateUserProduct from "./updateUserProduct";

export default async function handleCheckoutCompleted(completed: any) {
    const { client_reference_id, customer, subscription } = completed;

    const subscriptionInfo = await getSubscription(subscription);
    const productId = subscriptionInfo.items.data[0].price.product as string;
    const { supabaseId } = getProductByStripeId(productId)!;

    await updateUserProduct(client_reference_id, supabaseId, customer);
}