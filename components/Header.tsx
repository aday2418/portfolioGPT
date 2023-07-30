import Link from "next/link";
import LoginButton from "./LoginButton";

export default function Header(){

    

    return(
        <div className="relative w-full h-[75px] flex items-center justify-between px-[30px]">
            <div className="relative flex">
                <h1 className="text-white text-4xl font-semibold tracking-wider">chatfolio</h1>
            </div>
            <div className="relative flex gap-4">
                <LoginButton/>
            </div>
        </div>
    )
}