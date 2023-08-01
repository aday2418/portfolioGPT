export default function HomeInfo({number, tagline, description}: {number: string, tagline: string, description: string}){
    return(
        <div className='relative flex py-[20px] gap-4 items-center '>
            <h1 className='text-white text-5xl'>{number}</h1>
            <div className='relative flex flex-col'>
              <h1 className='text-white text-2xl'>{tagline}</h1>
              <h1 className='text-gray-400 text-lg'>{description}</h1>
            </div>  
        </div>
    )
}