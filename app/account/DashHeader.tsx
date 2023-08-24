import Link from "next/link";
import HeaderButtons from "./HeaderButtons";

export default function DashHeader(){
    return(
        <div className="relative w-full header h-[60px] border-b flex justify-between items-center border-gray-400 px-[40px]">
            <div>
                <Link href="/account">
                    <h1 className="text-white font-semibold tracking-wider text-2xl">Chatfolio</h1>
                </Link>
            </div>
            <HeaderButtons/>
        </div> 
    )
}