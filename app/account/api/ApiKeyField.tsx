'use client'

import { useState } from "react"

export default function ApiKeyField({ apiKey }: { apiKey: string}){
    const [visible, setVisible] = useState(false)
    const [copied, setCopied] = useState(false);

    const handleVisibility = () => {
        if(visible == false){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(apiKey);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          } catch (err) {
            console.error("Failed to copy text: ", err);
          }
        };
    
    return(
        <div className="relative flex gap-6 items-center">
            <div>
                <h1 className="relative text-white font-medium text-xl">API Key: </h1>
            </div>
            <div className="relative flex border-2 border-gray-600 rounded-lg items-center px-[10px] py-[5px] justify-between gap-2">
                <h1 className="relative bg-black text-sm text-white p-[5px] outline-none tracking-wide">{apiKey}</h1>
                <button type="button" onClick={handleCopy} className={copied ? "relative font-bold text-md bg-gray-500 relative px-[5px] w-[50px] text-green-500 border border-gray-600 rounded-md" : "relative bg-gray-500 relative w-[50px] px-[5px] text-white border rounded-md border-gray-600"}>{copied ? "✓" : "copy"}</button>
            </div>
            

        </div>
    )
}