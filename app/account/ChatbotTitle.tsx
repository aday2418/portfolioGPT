'use client'

import { useRouter } from 'next/navigation'

export default function ChatbotTitle(){
    const router = useRouter()

    const handleRefresh = () => {
        window.location.reload()
      }
    
    return(
        <div className='relative flex justify-between'>
            <h1 className="text-gray-400 tracking-wider font-semibold">Chatbot Preview</h1>
            <button type="button" onClick={handleRefresh} className='bg-black text-gray-500 font-medium text-small pr-[20px]'>
                ↻ refresh
             </button>
        </div>
    )
}