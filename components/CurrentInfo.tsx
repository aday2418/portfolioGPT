export default function CurrentInfo({currentInfo}: {currentInfo: string}){
    return(
        <div className="relative w-full h-full max-h-[450px] border-2 rounded-md px-[15px] py-[10px] overflow-scroll">
            <h1>{currentInfo}</h1>
        </div>
    )
}