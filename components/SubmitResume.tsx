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
        <form onSubmit={submitResume} className='relative w-full flex flex-col gap-2'>
          <h1> Paste resume or any other relevant information</h1>
          <textarea value={resumeInfo} onChange={handleResumeChange} placeholder="Paste Information Here" className='w-full h-[100px] py-[5px] px-[5px] outline-none border-gray-600 border-2 rounded-md'/>
          <button disabled={resumeInfo==''} type='submit' className='bg-blue-400 rounded-md text-white font-medium w-full py-[10px] px-[10px] shadow-md disabled:bg-blue-300 smoothe'>
            Submit
          </button>
        </form>
    )
}