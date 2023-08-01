'use client'

import { useState } from "react"

export default function ApiKeyField(){
    const [visible, setVisible] = useState(false)
    const [copied, setCopied] = useState(false);

    const apiKeyToDeleteNotReal = 'Abf32bwsg8b0aPsnqjq2h3noafhfw89345hgnw8'

    const handleVisibility = () => {
        if(visible == false){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(apiKeyToDeleteNotReal);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 500);
          } catch (err) {
            console.error("Failed to copy text: ", err);
          }
        };
    
    return(
        <div className="relative flex gap-6 items-center">
            <div>
                <h1 className="relative text-white font-medium text-xl">API Key: </h1>
            </div>
            <div className="relative flex border border-gray-600 w-[410px] rounded-lg items-center px-[10px] py-[10px] justify-between gap-2">
                <input type={visible ? "visible" : "password"} value={apiKeyToDeleteNotReal} className="relative bg-black flex-grow text-sm text-white p-[5px]"></input>
                <button type="button" onClick={handleVisibility} className="text-white w-[50px] bg-pink-500 rounded-md px-[5px]">{visible ? "hide" : "show"}</button>
                <button type="button" onClick={handleCopy} className={copied ? "font-bold text-md bg-pink-500 relative px-[5px] w-[50px] text-green-500 border border-gray-600 rounded-md" : "relative w-[50px] px-[5px] bg-pink-500 text-white border rounded-md border-gray-600"}>{copied ? "✓" : "copy"}</button>
            </div>
            

        </div>
    )
}