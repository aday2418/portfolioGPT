import { ReactNode } from "react";

export default function PageInfo({title, children}: {title: string, children: React.ReactNode}){
    return(
        <div className="relative w-full flex flex-col px-[50px] py-[30px] overflow-scroll">
            <h1 className='text-white text-4xl'>{title}</h1>
            {children}
        </div>
    )
}