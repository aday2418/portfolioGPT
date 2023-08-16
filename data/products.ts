
export type Product = {
    name: string,
    stripeId: string | null,
    supabaseId: string
} 

export default function products(): Product[] {
    return [
        {
            name: "Starter",
            stripeId: null,
            supabaseId: "bd894579-2c58-4064-9caa-a320db63295d"
        },
        {
            name: "Pro",
            stripeId: "prod_OMsD8HeVi99eTx",
            supabaseId: "eee02112-a196-442d-871c-3f98b7bdc603"
        },
        {
            name: "Enthusiast",
            stripeId: "prod_OMsL9IKUJyRXlI",
            supabaseId: "1d1b458e-e00d-4b2a-b1d8-b7e2f71398dc"
        }
    ]
}