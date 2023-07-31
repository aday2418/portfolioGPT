import CurrentInfo from '@/components/CurrentInfo'
import SubmitResume from '@/components/SubmitResume'
import { Session, createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Dashboard({ session, profile }: { session: Session | null, profile: any }) {    
    return(
        <div className='relative w-full flex flex-col pt-[40px] gap-2'>
            <SubmitResume/>
            <CurrentInfo currentInfo={profile.info}/>
        </div>
    )
}