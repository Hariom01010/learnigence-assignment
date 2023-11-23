import React from 'react'
import { GoBell, GoEye } from "react-icons/go";
import { SlSpeedometer } from "react-icons/sl";
import { BiTask } from "react-icons/bi";
import { MdEqualizer } from "react-icons/md";
import Profile from "../../assets/young-man-profile.png"
import { Badge } from '@mui/material';
import { RiBarChartHorizontalLine } from "react-icons/ri";
import siteLogo from "../../assets/siteLogo.png"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function Sidebar({srcImg}) {

  return (
    <div className='bg-[#dfdfdf] w-[4rem] h-[100%] m-0 p-0 fixed overflow-auto flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
            <img src={siteLogo} alt="" className='my-4 cursor-pointer' width={45}/>
            <RiBarChartHorizontalLine size={26} className='mt-4 cursor-pointer'/>
        </div>

        <div className='flex flex-col items-center mt-[-5rem]'>
            <Badge variant='dot' color="secondary">
              <GoBell size={26} className='mb-14 cursor-pointer'/>
            </Badge>
            <SlSpeedometer size={26} color='gray' className='mb-14 cursor-pointer' />
            <BiTask size={26} color='gray' className='mb-14 cursor-pointer'/>
            <GoEye size={26} color='gray' className='mb-14 cursor-pointer'/>
            <PeopleAltIcon color='action' className='mb-14 cursor-pointer'/>
            <MdEqualizer size={26} color='gray' className='cursor-pointer'/>
        </div>

        <div className='flex justify-center my-12'>
          {srcImg? <img src={srcImg} alt="" width={45} className='rounded-full'/>: <img src={Profile} alt="" width={45} className='rounded-full cursor-pointer'/>}
        </div>
    </div>
  )
}

export default Sidebar