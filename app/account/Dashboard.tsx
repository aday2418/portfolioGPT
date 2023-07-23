'use client'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Database } from '../database.types'
import { Session, createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Chatbot from '@/components/Chatbot'
import Error from 'next/error'
import uploadResume from '@/lib/uploadResume'
import CurrentInfo from '@/components/CurrentInfo'
import { useRouter } from 'next/navigation'

export default function Dashboard({ session, profile }: { session: Session | null, profile: any }) {
  const {info} = profile
  const [resumeInfo, setResumeInfo] = useState<string>('')
  const router = useRouter()

  const handleResumeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResumeInfo(e.target.value)
  }

  const submitResume = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      const {data, error} = await uploadResume(resumeInfo)

      console.log(data, error)
      if(!error){
        router.refresh()
        setResumeInfo('')
      }
    }catch(e: any){
      alert(e.message)
    }
    
  }

  console.log(info)
 
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className='relative w-[1000px] h-fit min-h-[500px] bg-white rounded-xl shadow flex flex-col gap-8 px-[50px] py-[10px] items-center'>
        <h1 className='relative w-full font-semibold text-2xl text-center'>Dashboard</h1> 
        <form onSubmit={submitResume} className='relative w-full flex flex-col gap-2'>
          <h1> Paste resume or any other relevant information</h1>
          <textarea value={resumeInfo} onChange={handleResumeChange} placeholder="Paste Information Here" className='w-full h-[100px] py-[5px] px-[5px] outline-none border-gray-600 border-2 rounded-md'/>
          <button type='submit' className='bg-blue-400 rounded-md text-white font-medium w-[20%] py-[10px] px-[10px]'>
            Submit
          </button>
        </form>
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