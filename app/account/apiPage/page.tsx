import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import PageInfo from "../PageInfo";
import { cookies } from 'next/headers'
import { Database } from '../database.types'
import { useState } from "react";
import ApiKeyField from "./ApiKeyField";

export default async function Page(){
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: apiKeys} = await supabase.from('api_keys').select()
    const primaryKey = apiKeys?.[0];

    return(
        <PageInfo title="API"> 
            <div className="relative flex flex-col">
                <h1>Your API Key: </h1>
                <div className="relative flex flex-col gap-4 py-[20px]">
                    <h1 className="text-white">Your API Key is used to access the Chatfolio bot on your portfolio website. Make sure to keep it hidden.</h1>
                    <ApiKeyField/>
                </div>
                <div className="relative flex flex-col pt-[40px] gap-4">
                    <h1 className="text-white text-3xl">Implementing the Chatbot</h1>
                    <h1 className="text-white">Subtext about exactly how you need to do it in the code</h1>
                    <div className="relative w-full h-[300px] bg-blue-700 my-[20px] flex items-center justify-center text-white font-xl rounded-md">
                        <h1>Code Snippet Goes Here</h1>
                    </div>
                </div>
            </div>
        </PageInfo>
    )
}