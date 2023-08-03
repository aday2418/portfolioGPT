'use client';

import { usePathname } from "next/navigation";
import Profile from "./Profile";
import Tab from "./Tab";

export default function Sidebar({email}: {email: string}){
    const path = usePathname();
    const sections = path.split('/');
    const current = sections[2]

    return(
        <div className="relative w-[200px] sidebar-height border-r border-gray-400 flex flex-col pt-[40px] gap-4 justify-between">
            <div>
                <Tab name="Home" link="/account" selected={!current} />
                <Tab name="Chatbot" link="/account/chatbot" selected={current == "chatbot"} />
                <Tab name="API" link="/account/api" selected={current == "api"} />
                <Tab name="Plans" link="/account/plans" selected={current == "plans"} />
                <Tab name="Feedback" link="/account/feedback" selected={current == "feedback"} />
            </div>
            <div>
                <Profile email={email}/>
            </div>
        </div>
    )
}