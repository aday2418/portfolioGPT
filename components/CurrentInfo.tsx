export default function CurrentInfo({currentInfo}: {currentInfo: string}){
    return(
        <div className="relative w-full h-full border-2 rounded-md px-[10px] py-[10px]">
            <h1>{currentInfo}</h1>
        </div>
    )
}