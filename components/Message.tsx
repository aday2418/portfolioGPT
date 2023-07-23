export default function Message({message}: {message: string}){
    return(
        <h1 className="relative w-fit flex self-end max-w-[70%] px-[10px] py-[5px] bg-blue-400 text-white tracking-wide rounded-xl font-medium break-words overflow-hidden">
            {message}
        </h1>
    )
}