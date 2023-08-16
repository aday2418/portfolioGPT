import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";
import { cookies } from 'next/headers'
import { Database } from '../database.types'


export default async function layout({children}: {children: React.ReactNode}){
    const supabase = createServerComponentClient<Database>({ cookies })

    const {
      data: { user },
    } = await supabase.auth.getUser()
    
    return(
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <DashHeader/>
            <div className="relative flex w-full">
                <Sidebar user={user}/>
                {children}
            </div>
        </div>
    )
}