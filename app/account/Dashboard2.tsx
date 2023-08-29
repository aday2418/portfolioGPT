'use client'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Session, createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Chatbot from '@/components/Chatbot'
import Error from 'next/error'
import uploadResume from '@/lib/uploadResume'
import CurrentInfo from '@/components/CurrentInfo'
import { useRouter } from 'next/navigation'
import SubmitResume from '@/components/SubmitResume'

export default function Dashboard2({ session, profile }: { session: Session | null, profile: any }) {
  const {info} = profile
 
  return (
    <div className="w-full min-h-screen flex py-[40px] justify-center overflow-scroll">
      <div className='relative w-[1100px] h-fit min-h-[500px] bg-white rounded-xl shadow flex flex-col gap-8 px-[50px] py-[20px] items-center'>
        <form className='self-end' action='/auth/signout' method='post'>
          <button type="submit" className='bg-red-400 w-fit px-[10px] py-[5px] tracking-wide rounded-md text-white shadow-md'>
            Logout
          </button>
        </form>
        <h1 className='relative w-full font-semibold text-2xl text-center'>Dashboard</h1> 
        <SubmitResume/>
        <div className='relative flex gap-4 w-full'>
          <div className='relative flex flex-col gap-2 w-full py-[10px]'>
            <h1 className='text-center'>Chatbot Preview</h1>
              <Chatbot/>
          </div>
          <div className='relative flex flex-col gap-2 w-full py-[10px]'>
            <h1 className='text-center'>Submitted Information</h1>
              <CurrentInfo currentInfo={info}/>
          </div>
        </div>
      </div>
    </div>
  )
}