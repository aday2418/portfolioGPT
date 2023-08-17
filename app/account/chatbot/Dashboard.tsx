
import Chatbot from '@/components/Chatbot'
import CurrentInfo from '@/components/CurrentInfo'
import SubmitResume from '@/components/SubmitResume'
import { Session, createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import ChatbotTitle from './ChatbotTitle'
import Navigation from './Navigation'

export default function Dashboard({ session, profile }: { session: Session | null, profile: any }) {    
    const { info, subscription_tier } = profile;
    const { resume_words_limit } = subscription_tier;

    const landingPageMessage = "Welcome to Chatfolio! Ask me any questions you may have about the site."


    return(
        <div className='relative w-full flex pt-[20px] gap-14'>
            <Navigation wordLimit={resume_words_limit} info={info} />
            <div className='relative flex flex-col gap-2'>
                <ChatbotTitle/>
                <Chatbot landingPage={true} defaultMessage={landingPageMessage} />
            </div>
        </div>
    )
}