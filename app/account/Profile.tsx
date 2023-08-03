
export default function Profile({email}: {email: string}){
    return(
        <div className="relative w-full h-[100px] flex flex-col justify-center gap-2 border-t px-[15px] border-gray-400 hover:bg-gray-900 cursor-pointer hover:border-gray-500 smoothe">
            <h1 className="text-white text-lg tracking-wide w-fit truncate">First Last</h1>
            <h1 className="text-white text-xs tracking-wide w-fit truncate">{email}</h1>
        </div>
    )
}