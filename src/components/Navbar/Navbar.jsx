import React from 'react'
import { GrDocumentText, GrDocumentVideo } from "react-icons/gr";
import { BsPlayBtn } from "react-icons/bs";
import { RiSlideshow2Line } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { BiSolidChalkboard } from "react-icons/bi";

function Navbar() {

    const navbarItems = [
        {
            icon:<SiGoogleclassroom size={22} color='gray' className='mx-2'/>,
            text:"Classroom"
        },
        {
            icon:<BiSolidChalkboard size={22} color='gray' className='mx-2'/>,
            text:"Whiteboard"
        },
        {
            icon:<BsPlayBtn size={22} className='mx-2'/>,
            text:"Videos"
        },
        {
            icon:<RiSlideshow2Line size={22} color="gray" className='mx-2'/>,
            text:"Slide Show"
        },
        {
            icon:<GrDocumentText color='gray' size={22} className='mx-2'/>,
            text:"Documents"
        },
        {
            icon:<GrDocumentVideo color='gray' size={22} className='mx-2'/>,
            text:"Doc.Cam"
        },

    ]

  return (
    <div className='bg-[#dfdfdf] flex justify-between rounded-full mx-8 py-3 xl:px-32 xl:py-2'>
        {navbarItems.map((navItem)=>{
            return(
                <div className={`flex items-center ${navItem.text=="Videos" ? "bg-slate-50":""} rounded-full cursor-pointer px-3 py-3 md:px-4 xl:py-2 2xl:px-12`}>
                    {navItem.icon}
                    <p className={`${navItem.text == "Videos" ? "text-black": "text-[#8f8f8f]"} font-medium text-[8px] md:text-xs lg:text-sm 2xl:text-lg`}>{navItem.text}</p>
                </div>
            )
        })}
        
    </div>
  )
}

export default Navbar