import products from "@/data/products";

export default function getProductByStripeId(stripeId: string) {
    return products().find(product => product.stripeId == stripeId)
}