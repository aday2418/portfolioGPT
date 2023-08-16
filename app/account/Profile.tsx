import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";

export default function Profile({user}: {user: User}){
    const { email, user_metadata } = user;
    const { name, picture } = user_metadata;

    return(
        <Link href="/account/profile">
            <div className="relative w-full h-fit flex flex-col justify-center gap-2 border-t py-[20px] px-[15px] border-gray-400 hover:bg-gray-900 cursor-pointer hover:border-gray-500 smoothe">
                <Image className="rounded-full" alt="Google Image" src={picture} width={40} height={40} />
                <h1 className="text-white text-base tracking-wide w-fit truncate">{name}</h1>
                <h1 className="text-white text-xs tracking-wide w-fit truncate">{email}</h1>
            </div>
        </Link>
    )
}