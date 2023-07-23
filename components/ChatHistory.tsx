import Message from "./Message";

export default function ChatHistory({messageHistory}: {messageHistory: string[]}){
    return(
        <div className="relative w-full h-[400px] flex flex-col gap-1 py-[20px] px-[20px]">
            {messageHistory.map((message, index) => <Message key={index} message={message}/>)}
        </div>
    )
}