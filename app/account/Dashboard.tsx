'use client'
import { useCallback, useEffect, useState } from 'react'
import { Database } from '../database.types'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Chatbot from '@/components/Chatbot'

export default function Dashboard({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>()
  const [loading, setLoading] = useState(true)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`email`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        // set states
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className='relative w-[1000px] h-fit min-h-[500px] bg-white rounded-xl shadow flex flex-col gap-8 px-[50px] py-[10px] items-center'>
        <h1 className='relative w-full font-semibold text-2xl text-center'>Dashboard</h1> 
        <div className='relative w-full flex flex-col gap-2'>
          <h1> Paste resume or any other relevant information</h1>
          <textarea placeholder="Paste Information Here" className='w-full h-[100px] py-[5px] px-[5px] outline-none border-gray-600 border-2 rounded-md'/>
        </div>
        <div className='relative flex flex-col gap-2 w-full py-[10px]'>
          <h1>Chatbot Preview</h1>
            <Chatbot/>
        </div>
      </div>
    </div>
  )
}