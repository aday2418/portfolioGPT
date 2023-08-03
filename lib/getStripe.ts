import Stripe from "stripe";

export default function getStripe() {
    return new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2022-11-15"
    })
}