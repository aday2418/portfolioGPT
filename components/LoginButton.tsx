'use client'

import googleLogin from "@/lib/googleLogin";
import { Database } from '../database.types'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


export default function LoginButton(){

    const supabase = createClientComponentClient<Database>()
    
    const handleLogin = async () => {
        await googleLogin();
    }
    
    return(
        <button onClick={handleLogin} className=" text-white font-medium px-[15px] py-[10px] text-lg tracking-wide rounded-xl border-2 border-transparent hover:border-white hover:shadow-md smoothe">
             Login
        </button>
    )
}