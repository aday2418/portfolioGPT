'use client';

import UserInput from "@/components/UserInput";
import createUser from "@/lib/createUser";
import { useState } from "react";

export default function CreateAccount() {
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleCreate = async (e: SubmitEvent) => {
        e.preventDefault();

        await createUser(email, username, password);
    }

    const handleEmail = (value: string) => {
        setEmail(value);
    }

    const handleUsername = (value: string) => {
        setUsername(value);
    }

    const handlePassword = (value: string) => {
        setPassword(value);
    }

    return (
        <div className="realtive w-full h-screen bg-blue-400 flex justify-center items-center">
            <form onSubmit={handleCreate} className="relative w-[500px] h-fit bg-white rounded-xl shadow flex flex-col  items-center py-[25px] gap-8">
                <h1 className="font-semibold text-2xl text-gray-800">Sign Up</h1> 
                <div className="w-full flex flex-col gap-4 px-[100px]">
                    <UserInput title="Email" value={email} placeholder="John.Doe@gmail.com" onChange={handleEmail} />
                    <UserInput title="Username" value={username} placeholder="John123" onChange={handleUsername} />
                    <UserInput title="Password" value={password} hidden={true} onChange={handlePassword} />
                    <button className="bg-blue-400 rounded-md px-[10px] py-[15px] text-white font-medium tracking-wide mt-[10px]">Sign Up</button>
                </div>
            </form>
        </div>
    )
}