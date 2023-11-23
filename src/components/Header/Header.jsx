import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import PhoneLogo from "../../assets/phone_logo.png"
import SupportLogo from "../../assets/support_logo.png"

function Header() {
  return (
    <div className='flex justify-between my-4 w-full'>
        <div className='flex items-center'>
            <div className='bg-[#dfdfdf] mx-6 mt-2 p-4 rounded-lg cursor-pointer'>
                <MdArrowBackIos className='ml-2' color='gray'/>
            </div>
            <h1 className='text-base sm:text-xl xl:text-2xl font-bold'>Basic Mathematics 101</h1>
        </div>

        <div className='flex xl:mx-8 mt-2'>
            <div className='flex items-center mx-4 cursor-pointer'>
                <button><img src={PhoneLogo} alt="" width={50}/></button>
                <p className='font-bold'>Call Teacher</p>
            </div>
            <div className='flex items-center cursor-pointer'>
                <button><img src={SupportLogo} alt="" width={45}/></button>
                <p className='font-bold'>Support</p>
            </div>
        </div>
    </div>
  )
}

export default Header