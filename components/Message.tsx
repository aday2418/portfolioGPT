import { MessageType } from "@/types/MessageType";

export default function Message({message}: {message: MessageType}){
    const { sender, message: content } = message
    return(
        <h1 className={`relative w-fit flex max-w-[70%] px-[10px] py-[5px] tracking-wide rounded-xl font-medium break-words overflow-hidden ${sender == "user" ? "bg-blue-400 text-white self-end" : "bg-white text-black self-start"}`}>
            {content}
        </h1>
    )
}