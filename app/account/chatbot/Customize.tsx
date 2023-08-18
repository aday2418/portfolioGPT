import { ChangeEvent, useState } from "react"
//import Switch from "react-switch";

export default function Customize() {
    const [welcomeMessage, setWelcomeMessage] = useState<string>('Welcome to Chatfolio! Ask me any questions you may have about the site.');
    const [chatbotColor, setChatbotColor] = useState<string>('');
    const [removeBranding, setRemoveBranding] = useState<boolean>(false);

    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setWelcomeMessage(e.target.value);
    }

    const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
        setChatbotColor(e.target.value);
    }

    const changeBranding = (checked: boolean) => {
        setRemoveBranding(checked);
    } 

    return (
        <div className='relative w-full flex flex-col gap-5 py-[20px]'>
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-gray-300 tracking-wider font-semibold">Welcome Message</h1>
                <textarea onChange={changeMessage} value={welcomeMessage} placeholder="Add your welcome message here." className="bg-black border-2 rounded-lg border-gray-600 p-[10px] outline-none text-white"  />
            </div>
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-gray-300 tracking-wider font-semibold">Chatbot Color</h1>
                <input onChange={changeColor} value={chatbotColor} placeholder="#FFFFFF" className="bg-black border-2 rounded-lg border-gray-600 p-[10px] outline-none text-white"  />
            </div>
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-gray-300 tracking-wider font-semibold">Remove Branding</h1>
                {/* <Switch disabled onChange={changeBranding} checked={removeBranding} checkedIcon={false} onColor="#3b82f6" uncheckedIcon={false} /> */}
            </div>
        </div>
    )
}