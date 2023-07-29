import Link from "next/link";

export default function Header(){
    return(
        <div className="relative w-full h-[75px] flex items-center justify-between px-[30px]">
            <div className="relative flex">
                <h1 className="text-white text-4xl font-semibold tracking-wider">chatfolio</h1>
            </div>
            <div className="relative flex gap-4">
                <Link href="/login">
                <button className=" text-white font-medium px-[15px] py-[10px] text-lg tracking-wide rounded-xl border-2 border-transparent hover:border-white hover:shadow-md smoothe">
                    Login
                </button>
                </Link>
            </div>
        </div>
    )
}