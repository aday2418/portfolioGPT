import Link from "next/link";

export default function Header(){
    return(
        <div className="relative w-full h-[75px] flex items-center justify-between px-[30px]">
            <div className="relative flex">
                <h1 className="text-white text-4xl font-semibold tracking-wider">chatfolio</h1>
            </div>
            <div className="relative flex gap-4">
                <Link href="/login">
                <button className="bg-white text-gray-900 font-medium px-[15px] py-[10px] rounded-xl shadow-sm hover:shadow">
                    Login
                </button>
                </Link>
                <Link href="/createAccount">
                <button className="border-2 border-white shadow text-white font-medium px-[15px] py-[10px] rounded-xl hover:shadow">
                    Sign Up
                </button>
                </Link>
            </div>
        </div>
    )
}