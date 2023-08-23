import ChatbotContext from "@/components/hooks/ChatbotContext";
import Lock from "@/components/icons/Lock";
import saveCustomizations from "@/lib/saveCustomizations";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useContext, useEffect, useState } from "react"
import Switch from "react-switch";

export default function Customize({ profile, locked }: {profile: any, locked: boolean}) {
    const { welcomeMessage, chatbotColor, removeBranding, changeChatbotColor, changeRemoveBranding, changeWelcomeMessage} = useContext(ChatbotContext);
    const router = useRouter();

    const [saved, setSaved] = useState<boolean>(false);

    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeWelcomeMessage(e.target.value);
    }

    const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
        changeChatbotColor(e.target.value);
    }

    const changeBranding = (checked: boolean) => {
        changeRemoveBranding(checked);
    } 

    const saveSettings = async () => {
        const { data, error } = await saveCustomizations(welcomeMessage, chatbotColor, removeBranding);

        if(!error) {
            setSaved(true);
        }

        router.refresh();
    }

    useEffect(() => {
        setSaved(false);
    }, [welcomeMessage, chatbotColor, removeBranding])

    return (
        <div className='relative w-full flex flex-col gap-5 py-[20px]'>
            {locked && (
                <div className="flex gap-2 py-[10px] px-[15px] rounded-lg bg-gray-800 w-fit items-center">
                    <Lock selected={true} />
                    <h1 className="text-gray-100 text-sm font-medium tracking-wide">These features are only available to Pro and Enthusiast tiers. Upgrade to the <Link className="underline font-semibold" href="http://localhost:3000/account/plans">Pro Tier</Link> to customize your chatbot.</h1>
                </div>
            )}
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
                <Switch onChange={changeBranding} checked={removeBranding} checkedIcon={false} onColor="#3b82f6" uncheckedIcon={false} />
            </div>
            {!locked && <button disabled={saved} onClick={saveSettings} className="w-fit bg-green-500 hover:bg-green-600 smoothe py-[10px] py-[10px] px-[15px] rounded-lg text-white font-medium tracking-wide disabled:bg-green-700">{saved ? "Saved" : "Save"}</button>}
        </div>
    )
}