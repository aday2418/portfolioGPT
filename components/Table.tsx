import { ReactNode } from "react"

export default function Table({color, title, price, children}: {color: number, title: string, price: string, children: ReactNode}){
    let colorVal = 'bg-white'
    if(color == 1)
        colorVal = 'bg-gradient-to-r from-pink-600 to-purple-600'
    if(color == 2)
        colorVal = 'bg-gradient-to-r from-purple-600 to-purple-600'
    if(color == 3)
        colorVal = 'bg-gradient-to-r from-purple-600 to-pink-600'

    return(
        <div className={`relative w-[300px] h-[500px] rounded-md ${colorVal} transition-all duration-300 ease-in-out flex flex-col items-center py-[30px] gap-2 px-[20px] overflow-hidden`}>
            {title=="Pro" && <h1 className="absolute w-full py-[5px] text-center bg-[#daa520] bottom-0 tracking-wider text-gray-200 font-medium text-xl">Most Popular</h1>}
            <h1 className="w-fit tracking-wider text-white text-2xl font-semibold">{title}</h1>
            <h1 className="w-fit tracking-wider text-white text-4xl font-bold rounded-lg shadow-xl px-[10px]">{price}
            {price!="Free" && <span className="text-lg text-gray-300">/mo</span>}
            </h1>
            <div className="relative flex flex-col gap-2 w-full bg-gray-700 mt-[10px] p-[10px] rounded-lg ">
                {children}
            </div>
        </div>

    )
}