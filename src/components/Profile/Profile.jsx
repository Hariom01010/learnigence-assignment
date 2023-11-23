import React from 'react'
import studentImg from "../../assets/studying-girl.jpg"
import teacher from "../../assets/teacher.jpg"
import { RiVoiceprintFill } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

function Profile({student, name}) {
  return (
    <div className='mb-10 mt-3'>
        <div className='flex justify-between relative z-50 mb-[-2.5rem]'>
            <RiVoiceprintFill className={`ml-[1rem] ${student? "invisible":""}`} color='gray' size={28}/>
            {student == true
            ? <div className='bg-slate-50 flex items-center rounded-full mr-2 xl:mr-6 2xl:mr-24'>
                <p className='px-1 ml-1'>😊</p>
                <GoPlus className='mr-1'/>
            </div>
            : ""}
        </div>
        <div className='z-10 overflow-hidden'>
          <img src={student? studentImg: teacher} alt="" className='rounded-3xl h-[140px] w-[200px] xl:h-[180px] xl:w-[250px]' />
          <div className='bg-[#dfdfdf] relative mt-[-1.7rem] ml-[-0.6rem] font-medium w-2/4 rounded-2xl bg-clip- px-5 py-1 text-sm xl:w-1/2 2xl:w-fit' >
              {name}
          </div>
        </div>
    </div>
  )
}

export default Profile