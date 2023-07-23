'use client'

import React, { ChangeEvent, FormEventHandler, useState } from "react";
import ChatHistory from "./ChatHistory";

export default function Chatbot(){
    const [messageHistory, setMessageHistory] = useState<string[]>([])
    const [currentMessage, setCurrentMessage] = useState<string>('')

    const changeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(e.target.value)
    }

    const addMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessageHistory(messageHistory.concat(currentMessage))
        setCurrentMessage('')
    }
    
    return(
        <div className="relative w-[600px] bg-gray-200 rounded-md ">
            <ChatHistory messageHistory={messageHistory}/>
            <form onSubmit={addMessage} className="relative w-full gap-2 h-[50px] flex border border-gray-300 rounded-md overflow-hidden smoothe shadow-md hover:shadow-lg bg-white">
                <input value={currentMessage} onChange={changeMessage} type='text' placeholder='Ask me anything...' className="w-full px-[10px] outline-none"/>
                <button type='submit' className="h-full bg-blue-400  text-white font-medium tracking-wider px-[10px] hover:bg-blue-500 smoothe ">
                    Submit
                </button>
            </form>
        </div>
    )
}