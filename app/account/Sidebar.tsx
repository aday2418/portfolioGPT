import Profile from "./Profile";
import Tab from "./Tab";

export default function Sidebar({email}: {email: string}){
    return(
        <div className="relative w-[200px] sidebar-height border-r-2 border-gray-400 flex flex-col pt-[40px] gap-4 justify-between">
            <div>
                <Tab name="Home"/>
                <Tab name="Plans"/>
                <Tab name="Settings"/>
            </div>
            <div>
                <Profile email={email}/>
            </div>
        </div>
    )
}