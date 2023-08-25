import { MessageType } from "@/types/MessageType";

export default function Message({message, chatbotColor=null}: {message: MessageType, chatbotColor?: string | null}){
    const { sender, message: content } = message

    const messageColor = chatbotColor || "#60a5fa"; 


    return(
        <h1 style={{backgroundColor: sender == "user" ? messageColor : "white" }} className={`relative w-fit flex max-w-[70%] px-[10px] py-[5px] tracking-wide rounded-xl font-medium break-words overflow-hidden whitespace-pre-wrap opacity-80 ${sender == "user" ? `text-white self-end` : "text-black self-start"}`}>
            {content}
        </h1>
    )
}