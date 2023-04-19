"use client"
import { BsFillPlayFill } from "react-icons/bs"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"

export function Main(){
    return(
        <main className="bg-zinc-900 flex-grow flex flex-col text-white">
          <div className='head mt-8 flex px-4 pl-8 w-full h-8'>
            <div className='buttons flex justify-between w-12 h-full gap-3 text-white'>
              <div className='rounded-full p-2 bg-zinc-950'>
                <IoChevronBackOutline/>
              </div>
              <div className='rounded-full p-2 bg-zinc-950'>
                <IoChevronForwardOutline/>
              </div>
            </div>
            <div className='userdata ml-auto mr-4 w-40 rounded-full h-full bg-zinc-600 flex gap-2 p-1 items-center'>
              <div className='avatar rounded-full overflow-hidden h-full'>
                <img className='object-cover w-full h-full'
                  src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                />
              </div>
              <span className='text-sm text-white'>Thiago Salomão</span>
            </div>
          </div>
          <div className='flex flex-grow flex-col p-4 gap-2'>
            <h1 className='font-semibold text-2xl'>Minhas playlists</h1>
            <div className='grid grid-rows-3 grid-cols-3 gap-4 flex-grow'>
              {[1,2,3,4,5,6].map(i=>{
                return(
                  <div key={i} className='bg-zinc-700 h-full w-full overflow-hidden shadow-2xl rounded-md'>
                    <div className='flex h-full w-full group cursor-pointer'>
                      <div className='w-[33%] h-full'>
                        <img src="https://m.media-amazon.com/images/I/71Mby0cpvxL._AC_SL1500_.jpg" 
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='flex flex-grow relative p-4 flex-col gap-2'>
                        <h1 className='font-semibold text-lg'>Mesmerize</h1>
                        <span className='text-sm'>System Of a Down</span>
                        <div className='shadow-xl text-black flex justify-center items-center p-4 w-14 h-14 rounded-full bg-green-500 absolute bottom-2 right-2 invisible group-hover:visible'>
                          <BsFillPlayFill className='w-full h-full'/>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
    )
}