'use client'

import uploadResume from "@/lib/uploadResume"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export default function SubmitResume(){
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
    
    return(
        <form onSubmit={submitResume} className='relative w-full flex flex-col gap-2 '>
          <h1 className="text-gray-400 tracking-wider font-semibold"> Paste your resume or other relavant information below</h1>
          <div className="border-2 border-gray-600 rounded-md overflow-hidden flex flex-col items-end">
            <textarea value={resumeInfo} onChange={handleResumeChange} placeholder="Paste Information Here" className='w-full h-[100px] py-[5px] px-[5px] outline-none bg-black text-white'/>
            <button disabled={resumeInfo==''} type='submit' className='bg-black border-t-2 border-gray-600 text-white font-medium w-full py-[10px] px-[10px] shadow-md hover:border-2 hover:border-gray-400 smoothe'>
                Submit
            </button>
          </div>
        </form>
    )
}