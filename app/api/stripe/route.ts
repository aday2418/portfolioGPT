import getStripe from "@/lib/getStripe";
import handleCheckoutCompleted from "@/lib/handleCheckoutCompleted";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const stripe = getStripe();

    let event;
    try {
        const sig = req.headers.get('stripe-signature')!;
        const body = await req.text()
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_ENDPOINT_SECRET!)
    } catch (e: any) {
        return new NextResponse(`Webhook Error: ${e.message}`, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const checkoutCompleted = event.data.object;

            try {
                await handleCheckoutCompleted(checkoutCompleted);
                return new NextResponse('Handled Session Completed', { status: 200})
            } catch(e: any) {
                return new NextResponse(`Recieved Event, but unable to process: ${e.message}`, { status: 400 });
            }
        // ... handle other event types
        default:
            return new NextResponse('Unfamiliar Event', { status: 200})
  }
}