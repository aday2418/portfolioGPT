import ChatHistory from "./ChatHistory";

export default function Chatbot(){
    return(
        <div className="relative w-[600px] bg-gray-200 rounded-md ">
            <ChatHistory/>
            <div className="relative w-full gap-2 h-[50px] flex border border-gray-300 rounded-md overflow-hidden smoothe shadow-md hover:shadow-lg bg-white">
                <input type='text' placeholder='Ask me anything...' className="w-full px-[10px] outline-none"/>
                <button className="h-full bg-blue-400  text-white font-medium tracking-wider px-[10px] hover:bg-blue-500 smoothe ">
                    Submit
                </button>
            </div>
        </div>
    )
}