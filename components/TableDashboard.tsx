'use client'

import googleLogin from "@/lib/googleLogin";
import { useRouter } from "next/navigation";
import { ReactNode } from "react"

export default function TableDashboard({color, title, price, selected, upgrade, link, children}: {color: number, title: string, price: string, selected: boolean, upgrade: boolean, link?: string, children: ReactNode}){
    const router = useRouter();
    link && router.prefetch(link);

    const handleLink = () => {
        link && router.push(link)
    }
    
    return(
        <div className={`relative w-[300px] h-[500px] border-white border-2 rounded-md transition-all duration-300 ease-in-out flex flex-col items-center py-[40px] gap-2 px-[20px]`}>
            <h1 className="w-fit tracking-wider text-white text-2xl font-semibold">{title}</h1>
            <h1 className="w-fit tracking-wider text-white text-4xl font-bold rounded-lg shadow-xl px-[10px]">{price}
            {price!="Free" && <span className="text-lg text-gray-300">/mo</span>}
            </h1>
            <div className="relative flex flex-col gap-2 w-full bg-gray-700 mt-[10px] p-[10px] rounded-lg ">
                {children}
            </div>
            <button disabled={selected} onClick={handleLink} type="button" className={`absolute tracking-wide bottom-[50px] rounded-xl px-[10px] py-[10px] font-semibold tracking-wide smoothe ${selected ? "bg-gray-100 text-black" : (upgrade ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-red-500 hover:bg-red-600 text-white")} min-w-[120px]`}>{selected ? "Current" : (upgrade ? "Upgrade" : "Downgrade")}</button>
        </div>

    )
}