export default function UserInput({ title, value, onChange, placeholder="", hidden=false}: {title: string, value:string, onChange: (value: string) => void, placeholder?:string, hidden?: boolean}) {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className="relative w-full flex flex-col gap-2">
            <h1 className="font-medium text-gray-700 text-md">{title}</h1>
            <input onChange={handleChange} value={value} className="border-2 rounded-md px-[10px] py-[5px] outline-gray-500 text-gray-700" type={hidden ? "password" : "text"} placeholder={placeholder} />
        </div>
    )
}