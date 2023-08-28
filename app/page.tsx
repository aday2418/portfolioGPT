import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Scroll from "@/components/Scroll";
import Table from "@/components/Table";
import Detail from "@/components/Detail";
import Pricing from "@/components/Pricing";
import MainPageButton from "@/components/MainPageButton";
import Panel from "./Panel";
import FinalButton from "./FinalButton";

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
      <div className="relative w-full h-screen flex flex-col items-center bg-blue-600 py-[80px] gap-32">
        <div className="flex justify-center gap-14 items-center">
          <Panel title="Upload Your Resume" step="upload" detail="Your chatbot can answer questions about your experience, skills, and background." />
          <Panel title="Customize Your Chatbot" step="customize" detail="Customize the appearance of your chatbot to make it suit your website." />        
          <Panel title="Upgrade Your Site" step="upgrade" detail="Elevate your site with an engaging chatbot, letting visitors learn more about you." />  
        </div>  
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-3xl font-bold w-fit text-white">Get Started for Free</h1>
          <FinalButton />
        </div>            
      </div>
    </div>
  )
}