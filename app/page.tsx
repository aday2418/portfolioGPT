import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Scroll from "@/components/Scroll";
import Table from "@/components/Table";
import Detail from "@/components/Detail";

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
            <button className="text-xl text-white bg-orange-500 rounded-lg tracking-widest mt-[20px] px-[40px] py-[10px] font-semibold border-2 border-transparent hover:bg-orange-600 hover:shadow-lg smoothe">Get Started</button>
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
        <div className="relative flex justify-center gap-14">
          <Table color={1} title="Starter" price="Free">
            <Detail bulletPoint="200 messages /mo"/>
            <Detail bulletPoint="Resume size 600 words"/>
          </Table>
          <Table color={2} title="Pro" price="$4.99">
            <Detail bulletPoint="2,000 messages /mo"/>
            <Detail bulletPoint="Resume size 1,000 words"/>
            <Detail bulletPoint="Remove Chatfolio Branding"/>
            <Detail bulletPoint="Chatbot Personalities"/>
          </Table>
          <Table color={3} title="Enthusiast" price="$19.99">
            <Detail bulletPoint="10,000 messages /mo"/>
            <Detail bulletPoint="Resume size 2,000 words"/>
            <Detail bulletPoint="Remove Chatfolio Branding"/>
            <Detail bulletPoint="Chatbot Personalities"/>
            <Detail bulletPoint="Custom Themes"/>
          </Table>
        </div>
      </div>
    </div>
  )
}