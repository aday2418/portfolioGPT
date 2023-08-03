import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import PageInfo from "../PageInfo";
import { cookies } from 'next/headers'
import { Database } from '../database.types'
import { useState } from "react";
import ApiKeyField from "./ApiKeyField";
import CodeSnippet from "./CodeSnippet";

export default async function Page(){
    const supabase = createServerComponentClient<Database>({ cookies })
    const {data: apiKeys} = await supabase.from('api_keys').select()
    const primaryKey = apiKeys?.[0].key;

    console.log(primaryKey)

    return(
        <PageInfo title="API"> 
            <div className="relative flex flex-col">
                <h1>Your API Key: </h1>
                <div className="relative flex flex-col gap-4 py-[20px]">
                    <h1 className="text-white">Your API Key is used to access the Chatfolio bot on your portfolio website.</h1>
                    <ApiKeyField apiKey={primaryKey} />
                </div>
                <CodeSnippet apiKey={primaryKey} />
            </div>
        </PageInfo>
    )
}