import Pricing from "@/components/Pricing";
import PageInfo from "../PageInfo";
import { cookies } from 'next/headers'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from '../database.types'
import PricingDashboard from "@/components/PricingDashboard";

export default async function Page(){
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: profiles} = await supabase.from('profiles').select(`
        id,
        stripe_id,
        email,
        subscription_tier(*)
    `)

    const { subscription_tier, stripe_id, email, id } = profiles?.[0] || {};

    return(
        <PageInfo title="Plans"> 
            <div className="relative w-full flex py-[90px] justify-center">
                <PricingDashboard tier={subscription_tier} stripeId={stripe_id} email={email} profileId={id} />
            </div>  
        </PageInfo>
    )
}