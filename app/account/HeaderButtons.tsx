export default function HeaderButtons(){
    return(
        <div>
            <form action='/auth/signout' method='post'>
                <button type="submit" className="border-2 border-red-400 rounded-lg text-red-400 text-sm font-bold tracking-wider px-[10px] py-[3px] hover:bg-red-950">Logout</button>
            </form>
        </div>
    )
}