export default async function changeSubscription(productId: string) {
     await fetch("/api/changeSubscription", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ productId })
     })
}