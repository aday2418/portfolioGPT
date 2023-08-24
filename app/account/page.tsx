import Link from 'next/link'
import HomeInfo from './HomeInfo'
import PageInfo from './PageInfo'
import { cookies } from 'next/headers'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from '../database.types'
import getMonthlyCalls from '@/lib/getMonthlyCalls';
import Usage from './Usage';

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {data: profiles} = await supabase.from('profiles').select(`
      *,
      subscription_tier(*)
  `);

  const { info, id, subscription_tier } = profiles?.[0];
  const {data, count} = await getMonthlyCalls(supabase, id);

  return (
    <PageInfo title="Home"> 
      <div className='relative flex flex-col gap-6 pt-[20px]'>
        {info && <Usage tier={subscription_tier} calls={data!} count={count!} />}
        <h1 className='text-white text-3xl py-[20px] tracking-wide'>Welcome to Chatfolio! Here's how you can get started building your personal chatbot</h1>
        <HomeInfo number="1." tagline="Create Your Chatbot" description='Upload your resume to the chatbot so it can answer any relevant questions about you for your visitors.'>
          Upload your resume to the <Link className='underline text-gray-200' href="/account/chatbot" >Chatbot</Link> so it can answer any relevant questions about you for your visitors.
        </HomeInfo>
        <HomeInfo number="2." tagline="Add Chatbot to Your Website" description="Add your personalize chatbot to your website with our easy-to-install API">
          Add your custom chatbot to your website with our easy-to-install <Link className='underline text-gray-200' href="/account/api" >API</Link>
        </HomeInfo>
      </div>
    </PageInfo>
  )
}