import Link from "next/link";
import AuthForm from "./AuthForm";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col bg-blue-600">
      <Header/>
      <div className="relative flex">
        <div className="relative flex flex-col items-center w-[800px] pt-[150px] gap-4">
          <h1 className="text-white text-6xl text-center font-semibold tracking-wide max-w-[600px] leading-[1.1]">Upgrade Your Portfolio Site</h1>
          <h1 className="text-white text-2xl text-center max-w-[400px] tracking-wide font-medium">
            Chatfolio gives you a personalized chatbot for your portfolio website.
          </h1>
        </div>
      </div>
    </div>
  )
}