export default function getPaymentLink(tier: string, id: string, email: string | null) {
    const paymentLink = tier == "enthusiast" ? "https://buy.stripe.com/test_dR65nC05QayVd9u001" : "https://buy.stripe.com/test_fZe8zO3i2fTf0mI4gg";

    return `${paymentLink}?client_reference_id=${encodeURIComponent(id)}&prefilled_email=${encodeURIComponent(email || '')}`
}