'use client';

import UserInput from "@/components/UserInput";
import createUser from "@/lib/createUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateAccount() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmedPassword, setConfirmedPassword] = useState<string>('')
    const [passwordError, setPasswordError] = useState<boolean>(false)
    const router = useRouter();

    useEffect(() => {
        if(password != confirmedPassword){
            setPasswordError(true)
        }else{
            setPasswordError(false)
        }
    }, [password, confirmedPassword])

    const handleCreate = async (e: SubmitEvent) => {
        e.preventDefault();

        if(password == confirmedPassword)
        {
            const session = await createUser(email, password);

            if(session) {
                router.push("/account") 
            }
        }else{
            //??
        }
    }

    const handleEmail = (value: string) => {
        setEmail(value);
    }

    const handlePassword = (value: string) => {
        setPassword(value);
    }

    const handleConfirmedPassword = (value:string) => {
        setConfirmedPassword(value);
    }
    //If passwords match

    return (
        <div className="realtive w-full h-screen bg-blue-400 flex justify-center items-center">
            <form onSubmit={handleCreate} className="relative w-[500px] h-fit bg-white rounded-xl shadow flex flex-col  items-center py-[25px] gap-8">
                <h1 className="font-semibold text-2xl text-gray-800">Sign Up</h1> 
                <div className="w-full flex flex-col gap-4 px-[100px]">
                    <UserInput title="Email Address" value={email} placeholder="John.Doe@gmail.com" onChange={handleEmail} />
                    <UserInput title="Password" value={password} hidden={true} onChange={handlePassword} />
                    <UserInput title="Confirm Password" value={confirmedPassword} hidden={true} onChange={handleConfirmedPassword} />
                    {passwordError && <h1 className="text-red-500 font-semibold">**Passwords Must Match</h1>}
                    <button className="bg-blue-400 rounded-md px-[10px] py-[15px] text-white font-medium tracking-wide mt-[10px]">
                        Sign Up
                    </button>
                    <Link href="/">
                        <button className="w-full bg-gray-400 rounded-md px-[10px] py-[15px] text-white font-medium tracking-wide mt-[10px]">
                            Return To Home Page
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}