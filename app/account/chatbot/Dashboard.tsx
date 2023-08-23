
import Chatbot from './Chatbot'
import { Session } from '@supabase/auth-helpers-nextjs'
import ChatbotTitle from './ChatbotTitle'
import Navigation from './Navigation'
import ChatbotProvider from './ChatbotProvider'

export default function Dashboard({ profile }: { profile: any }) {    
    const { subscription_tier } = profile;
    const { resume_words_limit } = subscription_tier;


    return(
        <ChatbotProvider profile={profile} >
            <div className='relative w-full flex pt-[20px] gap-14'>
                <Navigation wordLimit={resume_words_limit} profile={profile} />
                <div className='relative flex flex-col gap-2'>
                    <ChatbotTitle/>
                    <Chatbot />
                </div>
            </div>
        </ChatbotProvider>
    )
}