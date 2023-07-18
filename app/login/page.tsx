'use client'

import UserInput from "@/components/UserInput";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
    
    const [usernameOrEmail, setUsernameOrEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const handleLogin = async (e: SubmitEvent) => {
        e.preventDefault();
        //await tryLogin(usernameOrEmail, password);
    }
    
    const handleUsernameOrEmail = (value: string) => {
        setUsernameOrEmail(value);
    }

    const handlePassword = (value: string) => {
        setPassword(value);
    }
    
    return(
        <div className="w-full h-screen bg-blue-400 flex justify-center items-center">
            <form onSubmit={handleLogin} className="relative w-[500px] h-fit bg-white rounded-xl shadow flex flex-col  items-center py-[25px] gap-8">
                <h1 className="font-semibold text-2xl text-gray-800">Login</h1> 
                <div className="w-full flex flex-col gap-4 px-[100px]">
                    <UserInput title="Username or email" placeholder="John.Doe@gmail.com" onChange={handleUsernameOrEmail}/>
                    <UserInput title="Password" hidden={true} onChange={handlePassword}/>
                    <button className="bg-blue-400 rounded-md px-[10px] py-[15px] text-white font-medium tracking-wide">
                        Login
                    </button>
                    <Link href="/" >
                        <button className="w-full bg-gray-400 rounded-md px-[10px] py-[15px] text-white font-medium tracking-wide mt-[10px]">
                            Return To Home Page
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
    
    /*return (
        <div className="realtive w-full h-screen bg-blue-400 flex justify-center items-center">
            <div className="relative w-[500px] h-fit bg-white rounded-xl shadow flex flex-col  items-center py-[25px] gap-8">
                <h1 className="font-semibold text-2xl text-gray-800">Login</h1> 
                <div className="w-full flex flex-col gap-4 px-[100px]">
                    <UserInput title="Username or email" placeholder="John.Doe@gmail.com" />
                    <UserInput title="Password" hidden={true} />
                    <button className="bg-blue-400 rounded-md px-[10px] py-[15px] text-white font-medium tracking-wide">Login</button>
                </div>
            </div>
        </div>
    )*/
}