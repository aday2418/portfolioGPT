import Link from 'next/link'
import HomeInfo from './HomeInfo'
import PageInfo from './PageInfo'

export default function Account() {
  return (
    <PageInfo title="Home"> 
      <div className='relative flex flex-col gap-6'>
        <h1 className='text-white text-3xl py-[20px] tracking-wide'>Welcome to Chatfolio! Here's how you can get started building your personal chatbot</h1>
        <HomeInfo number="1." tagline="Create Your Chatbot" description='Upload your resume to the chatbot so it can answer any relevant questions about you for your visitors.'>
          Upload your resume to the <Link className='underline text-gray-200' href="/account/chatbot" >Chatbot</Link> so it can answer any relevant questions about you for your visitors.
        </HomeInfo>
        <HomeInfo number="2." tagline="Add Chatbot to Your Website" description="Add your personalize chatbot to your website with our easy-to-install API">
          Add your custom chatbot to your website with our easy-to-install <Link className='underline text-gray-200' href="/account/api" >API</Link>
        </HomeInfo>
      </div>
    </PageInfo>
  )
}