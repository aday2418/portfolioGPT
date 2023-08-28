'use client'

import Login from "./hooks/Login";


export default function LoginButton(){
    const handleLogin = Login();

    
    const handleClick = async () => {
        await handleLogin();
    }
    
    return(
        <button onClick={handleClick} className=" text-white font-medium px-[15px] py-[10px] text-lg tracking-wide rounded-xl border-2 border-transparent hover:border-white hover:shadow-md smoothe">
             Login
        </button>
    )
}