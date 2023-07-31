
import Chatbot from '@/components/Chatbot'
import CurrentInfo from '@/components/CurrentInfo'
import SubmitResume from '@/components/SubmitResume'
import { Session, createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import ChatbotTitle from './ChatbotTitle'

export default function Dashboard({ session, profile }: { session: Session | null, profile: any }) {    
    

    return(
        <div className='relative w-full flex pt-[40px] gap-14'>
            <div className='relative w-full flex flex-col gap-10'>
                <SubmitResume/>
                <CurrentInfo currentInfo={profile.info}/>
            </div>
            <div className='relative flex flex-col gap-2'>
                <ChatbotTitle/>
                <Chatbot/>
            </div>
        </div>
    )
}