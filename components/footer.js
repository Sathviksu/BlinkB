import React from 'react'
import { useRouter } from 'next/navigation'
const Footer= () => {
    const router=useRouter()
    const createblink = async () => {
        router.push("/add")
      }
  return (
    <div>
        <div className='h-screen flex pt-[12vh] bg-[url("/background.jpg")] bg-cover bg-center justify-center items-center'>
            <div className='box h-[80%] w-[80%] bg-white rounded-2xl shadow-[0_0_30px_#865DFF]'>
               <div className='up flex justify-evenly  text-black'>
                <ul className='company'>
                    <li className='text-2xl font-semibold pb-5 pt-[50px]'>Company</li>
                    <li>The Linktree Blog</li>
                    <li>Engineering Blog</li>
                    <li>Marketplace</li>
                    <li>What's New</li>
                    <li>About</li>
                    <li>Press</li>
                    <li>Careers</li>
                    <li>Link in Bio</li>
                    <li>Social Good</li>
                    <li>Contact</li>
                </ul>
                <ul className='community'>
                    <li className='text-2xl font-semibold pb-5 pt-[50px]'>Community</li>
                    <li>Linktree for Enterprise</li>
                    <li>2023 Creator Report</li>
                    <li>2022 Creator Report</li>
                    <li>Charities</li>
                    <li>What's Trending</li>
                    <li>Creator Profile Directory</li>
                    <li>Explore Templates</li>
                </ul>
                <ul className='support'>
                <li className='text-2xl font-semibold pb-5 pt-[50px]'>Support</li>
                <li>Help Topics</li>
                <li>Getting Started</li>
                <li>Linktree Pro</li>
                <li>Features & How-Tos</li>
                <li>FAQs</li>
                <li>Report a Violation</li>
                </ul>
                <ul className='trust and legal'>
                <li className='text-2xl font-semibold pb-5 pt-[50px]'>Trust and legal</li>
                <li>Terms & Conditions</li>
                <li>Privacy Notice</li>
                <li>Cookie Notice</li>
                <li>Trust Center</li>
                </ul>
               </div>
               <div className='down pt-[50px] flex pl-[100px] gap-4'>
               <button className='text-[20px] hover:bg-[#232323] bg-black h-[55px] w-[120px] rounded-4xl'>Login</button>
               <button onClick={()=>createblink()} className='text-[18px] text-black hover:bg-[#a0a93b] bg-[#F7EC09] h-[55px] w-[180px] rounded-4xl'>Get started for free</button>
               </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
