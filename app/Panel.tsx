import Brush from "@/components/icons/Brush";
import Rocket from "@/components/icons/Rocket";
import Upload from "@/components/icons/Upload";

export default function Panel({ title, step, detail }: {title: string, step: string, detail: string}) {
    return (
        <div className="w-[350px] h-[350px] border-2 rounded-lg py-[30px] px-[15px] flex flex-col gap-6 items-center bg-blue-700 shadow-md hover:shadow-lg smoothe">
            <div className="w-[60px] h-[60px]">
                {step == "customize" ? <Brush /> : step == "upgrade" ? <Rocket /> : <Upload />}
            </div>
            <h1 className="w-fit text-3xl text-white font-medium tracking-wide text-center h-[72px] ">{title}</h1>
            <h1 className="text-white tracking-wide font-medium text-lg px-[5px]">{detail}</h1>
        </div>
    )
}