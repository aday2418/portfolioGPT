'use client'

import UserInput from "@/components/UserInput";
import loginUser from "@/lib/loginUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const handleLogin = async (e: SubmitEvent) => {
        e.preventDefault();
        const session = await loginUser(email, password);

        if(session) {
            router.push("/account") 
        }
    }
    
    const handleEmail = (value: string) => {
        setEmail(value);
    }

    const handlePassword = (value: string) => {
        setPassword(value);
    }
    
    return(
        <div className="w-full h-screen bg-blue-400 flex justify-center items-center">
            <form onSubmit={handleLogin} className="relative w-[500px] h-fit bg-white rounded-xl shadow flex flex-col  items-center py-[25px] gap-8">
                <h1 className="font-semibold text-2xl text-gray-800">Login</h1> 
                <div className="w-full flex flex-col gap-4 px-[100px]">
                    <UserInput title="Email Address" placeholder="John.Doe@gmail.com" onChange={handleEmail}/>
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
}