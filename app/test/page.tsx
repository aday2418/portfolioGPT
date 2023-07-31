'use client'

import Script from "next/script"

export default function Page() {
    return (
        <div id="chatbot-container" className="w-screen h-screen relative flex justify-end items-end">
            <Script src="/chatbot"/>
        </div>
    )
}