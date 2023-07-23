import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '../database.types'
import Dashboard from './Dashboard'

export default async function Account() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {data: profiles} = await supabase.from('profiles').select()


  return <Dashboard session={session} profile={profiles?.[0]}/>
}