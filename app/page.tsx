import Link from "next/link";
import AuthForm from "./AuthForm";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="relative w-full h-[75px] flex items-center justify-end px-[30px] gap-4">
        <Link href="/login">
          <button className="bg-white text-gray-900 font-medium px-[15px] py-[10px] rounded-xl shadow-sm hover:shadow">
            Login
          </button>
        </Link>
        <Link href="/createAccount">
          <button className="border-2 border-white shadow text-white font-medium px-[15px] py-[10px] rounded-xl hover:shadow">
            Sign Up
          </button>
        </Link>
        
      </div>
    </div>
  )
}