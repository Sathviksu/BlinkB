"use client"
import React from 'react'
import FlipImage from './imagefipper/imagechanger'
import Page2 from '@/components/page2'
import Page3 from '@/components/page3'
import Footer from '@/components/footer'
import {useRouter} from 'next/navigation'
import { useState } from 'react'

const page = () => {
  const [text, settext] = useState("")
  const router=useRouter()
  const createblink = async () => {
    router.push(`/add?handle=${text}`)
  }

  return (
    <div>
      <div className='bg-[#254f1a] h-screen flex'>
        <div className='left'>
          <div className='tag  text-[#F0FF42] text-7xl tracking-tight pt-[180px] font-extrabold pl-10'>Seamless Sharing,<br></br> Just a Blink Away.</div>
          <div className='tag text-2xl font-semibold text-[#F0FF42] pt-[30px] pl-10'>Join people using Linktree for their link in bio. One link to help you share <br></br>everything you create, curate and sell from your Instagram, TikTok, Twitter, <br></br>YouTube and other social media profiles.</div>
          <div className='butto pl-10 flex mt-[100px] gap-3'>
            <input value={text} onChange={(e)=>settext(e.target.value)} type='text' placeholder='Enter your handle' className='bg-[#d9f1fa] pl-4 h-[50px] rounded-2xl text-[#232323]'></input>
            <button onClick={()=>createblink()}className='h-[50px] bg-[#F0FF42] text-[#254f1a] text-[20px] font-semibold rounded-2xl w-[200px] hover:bg-[#d3dc6f]  hover:shadow-[0_0_30px_#F0FF42]'>Claim Your Blink</button>
          </div>
        </div>
        <div className='right pl-[50px] floating'>
          <FlipImage />
        </div>
      </div>
      <Page2 />
      <Page3 />
      <Footer />
    </div>
  )
}

export default page