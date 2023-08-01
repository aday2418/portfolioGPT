import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Scroll from "@/components/Scroll";
import Table from "@/components/Table";
import Detail from "@/components/Detail";
import Pricing from "@/components/Pricing";
import MainPageButton from "@/components/MainPageButton";

export default function Home() {
  const landingPageMessage = "Welcome to Chatfolio! Ask me any questions you may have about the site."

  return (
    <div>
      <div className="relative w-full h-screen flex flex-col bg-blue-600">
        <Header/>
        <div className="relative flex">
          <div className="relative flex flex-col items-center w-[800px] pt-[150px] gap-4 ml-[110px]">
            <h1 className="text-white text-6xl text-center font-semibold tracking-wide max-w-[600px] leading-[1.1] ">Upgrade Your Portfolio Site</h1>
            <h1 className="text-white text-2xl text-center max-w-[400px] tracking-wide font-medium">
              Chatfolio gives you a personalized chatbot for your portfolio website.
            </h1>
            <MainPageButton/>
          </div>
          <div className="relative w-full flex pt-[90px] justify-center ">
            <div className="relative shadow-xl shadow-black/30 hover:shadow-black/50 smoothe hover:shadow-2xl border-2 border-white rounded-lg">
              <Chatbot defaultMessage={landingPageMessage} landingPage={true}/>
            </div>
          </div>
        </div>
        <Scroll/>
      </div>
      <div className="relative w-full h-screen flex flex-col bg-black">
        <div className="relative flex py-[80px] justify-center">
          <h1 className="text-white text-6xl tracking-wide font-semibold">Pricing</h1>
        </div>
        <Pricing/>
      </div>
    </div>
  )
}