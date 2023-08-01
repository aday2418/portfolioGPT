import HomeInfo from './HomeInfo'
import PageInfo from './PageInfo'

export default function Account() {

  return (
    <PageInfo title="Home"> 
      <div className='relative flex flex-col gap-6'>
        <h1 className='text-white text-3xl py-[20px] tracking-wide'>Welcome to Chatfolio! Here's how you can get started building your personal chatbot</h1>
        <HomeInfo number="1." tagline="Upload Your Resume" description='Use the Chatbot to fill in your resume. This will let the chatbot know about you. You can upload blah blah blah'/>
        <HomeInfo number="2." tagline="Get An API" description='Use the Chatbot to fill in your resume. This will let the chatbot know about you. You can upload blah blah blah'/>
        <HomeInfo number="3." tagline="Customize Your Chatbot" description='Use the Chatbot to fill in your resume. This will let the chatbot know about you. You can upload blah blah blah'/>
        <HomeInfo number="4." tagline="Choose A Payment Plan" description='Use the Chatbot to fill in your resume. This will let the chatbot know about you. You can upload blah blah blah'/>
      </div>
    </PageInfo>
  )
}