'use client'

import uploadResume from "@/lib/uploadResume"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"
import wordsCount from 'words-count';

export default function SubmitResume({ wordLimit }: {wordLimit: number}){
    const [resumeInfo, setResumeInfo] = useState<string>('');
    const router = useRouter();
    const wordCount = wordsCount(resumeInfo);
    const overWordLimit = wordCount > wordLimit;

    const handleResumeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setResumeInfo(e.target.value)
    }

    const submitResume = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try{
            const {data, error} = await uploadResume(resumeInfo)

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
            <textarea value={resumeInfo} onChange={handleResumeChange} placeholder="Paste Information Here" className='w-full h-[225px] py-[5px] px-[5px] outline-none bg-black text-white resize-none'/>
            <div className="w-full p-[10px] flex justify-end border-t border-gray-800">
                <h1 className={`${overWordLimit ? "text-red-400 font-medium" : "text-white"} text-sm tracking-wide`}>{wordCount} / {wordLimit} words</h1>
            </div>
            <button disabled={resumeInfo=='' || overWordLimit} type='submit' className='bg-black border-t-2 border-gray-600 text-white font-medium w-full py-[10px] px-[10px] shadow-md hover:border-2 hover:border-gray-400 disabled:text-gray-400 smoothe'>
                Submit
            </button>
          </div>
        </form>
    )
}