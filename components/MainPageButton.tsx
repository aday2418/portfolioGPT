'use client'

import googleLogin from "@/lib/googleLogin";

export default function MainPageButton(){
    
    const handleLogin = async () => {
        await googleLogin();
    }
    
    return(
        <button type="button" onClick={handleLogin} className="text-xl text-white bg-orange-500 rounded-lg tracking-widest mt-[20px] px-[40px] py-[10px] font-semibold border-2 border-transparent hover:bg-orange-600 hover:shadow-lg smoothe">Get Started</button>
    )
}