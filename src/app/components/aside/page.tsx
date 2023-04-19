"use client"
import { BiHomeAlt, BiLibrary, BiSearch } from "react-icons/bi";


export function Aside(){
    return(
        <div className="aside w-44 bg-[black] px-2 flex-shrink-0">
          <nav className='mt-12'>
            <a className="group cursor-pointer">
              <div className="flex h-4 w-full gap-2 text-zinc-400 items-center py-4 px-1 rounded-sm group-hover:bg-zinc-800 group-hover:text-zinc-100">
                <BiHomeAlt size={20}/>
                <span>Home</span>
              </div>
            </a>            
            <a className="group cursor-pointer">
              <div className="flex h-4 w-full gap-2 text-zinc-400 items-center py-4 px-1 rounded-sm group-hover:bg-zinc-800 group-hover:text-zinc-100">
                <BiSearch size={20}/>
                <span>Search</span>
              </div>
            </a>            
            <a className="group cursor-pointer">
              <div className="flex h-4 w-full gap-2 text-zinc-400 items-center py-4 px-1 rounded-sm group-hover:bg-zinc-800 group-hover:text-zinc-100">
                <BiLibrary size={20}/>
                <span>Your Library</span>
              </div>
            </a>            
          </nav>
        </div>
    )
}