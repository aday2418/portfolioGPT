import Lock from "@/components/icons/Lock";

export default function NavigationButton({ selectSection, value, title, selected, locked=false }: {selectSection: (value: string) => void, value: string, title: string, selected: boolean, locked?: boolean}) {
    const handleClick = () => {
        selectSection(value);
    }

    return locked ? (
        <div className={`flex gap-1 items-center smoothe py-[10px] px-[15px] rounded-t-lg ${selected && "bg-gray-800"}`}>
            <button disabled={selected} onClick={handleClick} className="text-gray-500 disabled:text-gray-200 font-semibold tracking-wide">{title}</button>
            <Lock selected={selected} />
        </div>
    ) : <button disabled={selected} onClick={handleClick} className="text-gray-500 py-[10px] px-[15px] font-semibold tracking-wide smoothe disabled:text-gray-200 rounded-t-lg disabled:bg-gray-800">{title}</button>
}