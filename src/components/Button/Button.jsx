import React from 'react'
import { TiMicrophoneOutline } from "react-icons/ti";
import { RxExit } from "react-icons/rx";
import { FaRegShareSquare } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { IoChatbubblesOutline } from "react-icons/io5";

function Button({text}) {

    const buttons = [
        {
            button: <HiOutlineVideoCamera size={30} className='mx-auto'/>,
            text: "Cam"
        },
        {
            button: <TiMicrophoneOutline size={30} className='mx-auto'/>,
            text: "Mic"
        },
        {
            button: <FaRegShareSquare size={30} className='mx-auto'/>,
            text: "Share"
        },
        {
            button:<IoChatbubblesOutline size={28} className='mx-auto'/>,
            text: "Chat"
        },
        {
            button: <RxExit size={28} className='mx-auto'/>,
            text: "Leave"
        },
    ]

    return (
        <div className='flex flex-wrap'>
            {
                buttons.map((button)=>{
                    return (
                        <div className='w-1/5 xl:w-1/5 mr-5 my-8' key={button.text}>
                            <div className={`${button.text == "Leave"? "bg-[#0785a9] text-slate-50": "bg-[#dfdfdf]"} mb-2  py-4 rounded-lg`}>
                                {button.button}
                            </div>
                            <p className='font-medium text-center'>{button.text}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Button