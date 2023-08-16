import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import PageInfo from "../PageInfo";
import { Database } from '../database.types'
import { cookies } from 'next/headers'
import formatDollar from "@/lib/formatDollar";
import Link from "next/link";
import Options from "./Options";


export default async function Page() {
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: profiles} = await supabase.from('profiles').select(`
        id,
        stripe_id,
        email,
        subscription_tier(*)
    `)

    const { subscription_tier, stripe_id, email, id } = profiles?.[0] || {};
    const { name, monthly_cost } = subscription_tier!;

    return (
        <PageInfo title="Profile">
            <div className="mt-[50px] w-[500px] border-2 rounded-xl border-gray-300 flex flex-col gap-3 p-[10px]">
                <h1 className="text-gray-100 text-2xl ">Current Plan</h1>
                <h1 className="w-fit py-[5px] px-[10px] bg-gray-100 rounded-md font-bold tracking-wide">{name}</h1>
                <h1 className="text-white tracking-wide text-lg font-medium">{formatDollar(monthly_cost)} per Month</h1>
                <Options stripeId={stripe_id}  />
            </div>
        </PageInfo>
    )
}