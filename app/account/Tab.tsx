import Link from "next/link";

export default function Tab({name, link, selected}: {name: string, link:string, selected: boolean}){
    return(
        <Link href={link}>
            <div className={`relative w-full h-[70px] flex pl-[25px] items-center hover:bg-gray-900 cursor-pointer border-y hover:border-gray-500 smoothe ${selected ? " border-gray-500 bg-gray-900" : "border-transparent"}`}>
                <h1 className="text-white text-xl tracking-wide w-fit font-medium">{name}</h1>
            </div>
        </Link>
    )
}