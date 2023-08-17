export default function NavigationButton({ selectSection, value, title, selected }: {selectSection: (value: string) => void, value: string, title: string, selected: boolean}) {
    const handleClick = () => {
        selectSection(value);
    }

    return <button disabled={selected} onClick={handleClick} className="text-gray-500 py-[10px] px-[15px] font-semibold tracking-wide smoothe disabled:text-gray-200 rounded-t-lg disabled:bg-gray-800">{title}</button>
}