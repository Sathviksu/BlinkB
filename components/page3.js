import React from 'react'
import FlipImage3 from '../app/imagefipper/imagechanger3'
import { useRouter } from 'next/navigation'
const Page3 = () => {
  const router=useRouter()
      const createblink = async () => {
        router.push("/add")
      }
  return (
    <div>
        <div className='h-[110vh] flex  '>
            
            <div className='right bg-[#845EC2] w-[55%] pl-[50px]'>
                <div className='tag text-[#071952] text-6xl tracking-tight pt-[200px] font-extrabold'>Share your Blink <br></br>from your Instagram, <br></br>TikTok, Twitter and <br></br> other bios</div>
                <div className='pt-[30px] pb-[40px] text-[20px] font-medium  text-[#071952]'>
                Add your unique Blink URL to all the platforms and places you find your audience. <br></br>Then use your QR code to drive your offline traffic online.</div>
            <button onClick={()=>createblink()} className='h-[60px] bg-[#071952] hover:bg-[#26326a] w-[180px] rounded-3xl'>Get started for free</button>
            </div>
            <div className='left bg-[#845EC2] w-[45%]'>
            <FlipImage3 />
            </div>
        </div>
    </div>
  )
}

export default Page3