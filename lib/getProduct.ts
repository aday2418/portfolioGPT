import getStripe from "./getStripe";

export default async function getProduct(productId: string) {
    const stripe = getStripe();

    return await stripe.products.retrieve(productId);
}