import { MessageType }  from "@/types/MessageType";
import Message from "./Message";

export default function ChatHistory({messageHistory}: {messageHistory: MessageType[]}){
    return(
        <div className="relative w-full h-[400px] overflow-y-auto">
            <div className="relative w-full flex flex-col gap-1 py-[20px] px-[20px]">
                {messageHistory.map((message, index) => <Message key={index} message={message}/>)}
            </div>
        </div>
    )
}