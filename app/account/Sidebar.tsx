import Profile from "./Profile";
import Tab from "./Tab";

export default function Sidebar({email}: {email: string}){
    return(
        <div className="relative w-[200px] sidebar-height border-r border-gray-400 flex flex-col pt-[40px] gap-4 justify-between">
            <div>
                <Tab name="Home" link="/account"/>
                <Tab name="Plans" link="/account/plans"/>
                <Tab name="Settings" link="/account/settings"/>
            </div>
            <div>
                <Profile email={email}/>
            </div>
        </div>
    )
}