export default function Detail({bulletPoint}: {bulletPoint: string}){
    return(
        <div className="relative flex gap-2">
            <h1 className="text-white font-medium tracking-wide"> <span className="text-green-400 text-xl font-bold">✓</span> {bulletPoint}</h1>
        </div>
    )
}