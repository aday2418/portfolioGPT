export default function CurrentInfo({currentInfo}: {currentInfo: string}){
    return(
        <div className="relative w-full flex flex-col gap-2">
          <h1 className="text-gray-400 tracking-wider font-semibold"> Preview Submitted Resume Information</h1>
            <div className="relative w-full h-[225px] border-2 border-gray-600 rounded-md py-[5px] px-[5px] overflow-scroll">
                <h1 className="text-white">{currentInfo}</h1>
            </div>
        </div>
    )
}