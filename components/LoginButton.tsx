'use client'

import googleLogin from "@/lib/googleLogin";


export default function LoginButton(){

    
    const handleLogin = async () => {
        await googleLogin();
    }
    
    return(
        <button onClick={handleLogin} className=" text-white font-medium px-[15px] py-[10px] text-lg tracking-wide rounded-xl border-2 border-transparent hover:border-white hover:shadow-md smoothe">
             Login
        </button>
    )
}