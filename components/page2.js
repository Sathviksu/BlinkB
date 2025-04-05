import React from 'react'
import FlipImage2 from '../app/imagefipper/imagechanger2'
import { useRouter } from 'next/navigation'
const Page2 = () => {
  const router=useRouter()
    const createblink = async () => {
      router.push("/add")
    }
  return (
    <div>
        <div className='h-[110vh] flex  '>
            <div className='left bg-[#35A29F] w-[45%]'>
            <FlipImage2 />
            </div>
            <div className='right bg-[#35A29F] w-[55%]'>
                <div className='tag text-[#071952] text-6xl tracking-tight pt-[200px] font-extrabold'>Create and customize <br></br>your Blink bio in<br></br> minutes</div>
                <div className='pt-[30px] pb-[40px] text-[20px] font-medium  text-[#071952]'>Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast,<br></br> events and more. It all comes together in a link in bio landing page designed to <br></br>convert.</div>
            <button onClick={()=>createblink()} className='h-[60px] bg-[#071952] hover:bg-[#222d52] w-[180px] rounded-3xl'>Get started for free</button>
            </div>
        </div>
    </div>
  )
}

export default Page2