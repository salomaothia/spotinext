"use client"

import { BsFillPlayFill, BsFillVolumeUpFill } from "react-icons/bs";
import { FaStepBackward, FaStepForward } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { ImShuffle } from "react-icons/im";
import { IoChevronUp } from "react-icons/io5";
import { MdQueueMusic } from "react-icons/md";
import { TbDevices2 } from "react-icons/tb";

export function Footer(){
    return (
        <>
            <div className='w-full h-1 bg-zinc-600'>
                <div className='w-[25%] bg-white h-full'>

                </div>
            </div>
            <footer className="h-16 w-full grid grid-cols-3 grid-rows-1 text-zinc-400 bg-zinc-800">
                <section className='h-full flex gap-1'>
                    <div className='h-full flex gap-1 cursor-pointer'>
                    <img src="https://m.media-amazon.com/images/I/71Mby0cpvxL._AC_SL1500_.jpg"
                        className='h-full w-auto'
                    />
                    <div className='flex flex-col justify-center h-full pb-2'>
                        <span className='font-semibold text-zinc-300'>Hypnotize</span>
                        <span className='text-xs text-zinc-400'>System of a down</span>
                    </div>
                    </div>
                </section>
                <section className='flex justify-center items-center p-2 gap-6'>
                    <ImShuffle/>
                    <FaStepBackward/>
                    <div className='h-full rounded-full bg-white text-black p-3 flex justify-center items-center'
                        onClick={()=>{console.log('Play')}}
                    >
                        <BsFillPlayFill className='w-full h-full'/>
                    </div>          
                    <FaStepForward/>
                    <FiRepeat/>
                </section>
                <section className='flex items-center justify-end gap-6 h-full pr-4'>
                    <MdQueueMusic size={20}/>
                    <TbDevices2 size={20}/>
                    <BsFillVolumeUpFill size={20}/>
                    <IoChevronUp size={20}/>
                </section>
            </footer>
        </>
    )
}