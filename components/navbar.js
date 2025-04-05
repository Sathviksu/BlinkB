"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname()
  const showNavbar = ["/", "/add"].includes(pathname)
  return (<>{showNavbar &&<div className='fixed flex justify-center items-center top-11 w-screen z-10'>
      <nav className='h-[80px] text-black w-[85vw] flex justify-between pl-2.5 pr-3 rounded-[35px] bg-[#d9f1fa]'>
        <div className='fo flex justify-center items-center gap-2'>
          <img src='/logo1.png' className='h-[60px]' alt='logo' />
          <ul className='flex justify-around text-[20px] text-[#242323] items-center gap-3 h-full'>
            <Link href='/'><li className='hover:bg-blue-200 flex items-center justify-center h-[40px] w-[100px] rounded-2xl'>Home</li></Link>
            <Link href=''><li className='hover:bg-blue-200 flex items-center justify-center h-[40px] w-[120px] rounded-2xl'>MarketPlace</li></Link>
            <Link href=''><li className='hover:bg-blue-200 flex items-center justify-center h-[40px] w-[100px] rounded-2xl'>Discover</li></Link>
            <Link href=''><li className='hover:bg-blue-200 flex items-center justify-center h-[40px] w-[80px] rounded-2xl'>Pricing</li></Link>
            <Link href=''><li className='hover:bg-blue-200 flex items-center justify-center h-[40px] w-[80px] rounded-2xl'>Learn</li></Link>
          </ul>
        </div>
        <div className='log flex justify-around items-center gap-2.5 text-[#d9f1fa]'>
          <button className='text-2xl hover:bg-[#232323] bg-black h-[55px] w-[120px] rounded-4xl'>Login</button>
          <button className='text-2xl hover:bg-[#232323] bg-black h-[55px] w-[130px] rounded-4xl'>Sign Up</button>
        </div>
      </nav>
    </div>}
    </>
  )
}

export default Navbar