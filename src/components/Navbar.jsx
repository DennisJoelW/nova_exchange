import React, {memo, useState} from 'react'
import {HiOutlineMenuAlt3, HiOutlineMenu  } from 'react-icons/hi'
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const[menu, changeMenu] = useState(false)

  const openMenu = () => {
    changeMenu(true)
  }
  const closeMenu = () => {
    changeMenu(false)
  }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-7xl mx-auto px-4 pt-4'>
        <h1 className='w-full lg:text-5xl md:text-5xl font-semibold text-[#f7931a] font-poppins text-2xl'>Telwin</h1>
        <ul className='hidden md:flex font-poppins'>
          <li className=' p-4'>Home</li>
          <li className=' p-4'>Company</li>
          <li className=' p-4'>Contact</li>
          <li className=' p-4'>About</li>
        </ul>

        <div className=' block md:hidden'>
          {menu ? <IoMdClose size={24} className=' cursor-pointer' onClick={closeMenu}/> :<HiOutlineMenu size={24} onClick={openMenu} className=' cursor-pointer'/>}
        </div>

        <div className={menu ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-700 border-b border-b-gray-700 h-full bg-zinc-950 ease-linear duration-300 block md:hidden" : " fixed left-[-100%]"}>
        <h1 className='w-full text-4xl font-semibold text-[#f7931a] m-4 mt-6 font-poppins'>Bruh</h1>
          <ul className='uppercase mt-10 font-poppins'>
            <li className=' p-5 text-lg border-gray-200'>Home</li>
            <li className=' p-5 text-lg border-gray-200'>Company</li>
            <li className=' p-5 text-lg border-gray-200'>Contact</li>
            <li className=' p-5 text-lg border-gray-200'>About</li>
          </ul>
        </div>


    </div>
  )
}

export default Navbar