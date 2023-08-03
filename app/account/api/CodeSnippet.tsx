'use client';

import { useState } from "react";
import { CopyBlock, irBlack } from "react-code-blocks";

export default function CodeSnippet({ apiKey }: {apiKey: string}) {
    const [fullExample, setFullExample] = useState<boolean>(false);

    const text = fullExample ? `<head>
    <!-- Paste your code snippet here -->
    <script src='http://localhost/chatbot?id=${apiKey}' async defer/>
</head>
<body>
    <!-- The content of your website -->
</body>` : `<script src='http://localhost/chatbot?id=${apiKey}' async defer/>`;

    const handleFullExample = () => {
        setFullExample(true);
    }

    const handleSnippet = () => {
        setFullExample(false);
    }

    return (
        <div className="relative flex flex-col pt-[40px] gap-4">
            <h1 className="text-white text-3xl">Insert The Chatbot</h1>
            <h1 className="text-white">Paste this code snippet inside the <span className="text-yellow-300">{"<head>"}</span> tag of your website.</h1>
            <div className="relative  w-fit flex bg-gray-700 rounded-xl overflow-hidden gap-0.5 border-2 border-gray-700">
                <button onClick={handleSnippet} className={`smoothe w-fit py-[10px] px-[15px] text-gray-200 ${fullExample ? "bg-black text-gray-500" : "bg-gray-900 text-gray-200"}`}>Code Snippet</button>
                <button onClick={handleFullExample} className={`smoothe w-fit py-[10px] px-[15px] ${!fullExample ? "bg-black text-gray-500" : "bg-gray-900 text-gray-200"}`}>Full Example</button>
            </div>
            <div className="relative w-full rounded-xl overflow-hidden border-2 border-gray-700">
                <CopyBlock customStyle={{height: "100%", padding: "10px", fontSize: "0.875rem"}} text={text} theme={irBlack} showLineNumbers={true} language="html" />
            </div>
        </div>
    )
}