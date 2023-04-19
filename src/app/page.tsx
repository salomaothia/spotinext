import {BiHomeAlt, BiLibrary, BiSearch} from 'react-icons/bi'
import {IoChevronBackOutline, IoChevronForwardOutline} from 'react-icons/io5'

export default async function page(){
  const produtos = await fetch('https://estoque.salomaothia3.site/produtos')
  return(
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-grow w-full">
        <div className="aside w-44 bg-[black] px-2">
          <nav className='mt-12'>
            <a className="group">
              <div className="flex h-4 w-full gap-2 text-zinc-400 items-center py-4 px-1 rounded-sm group-hover:bg-zinc-700 group-hover:text-zinc-100">
                <BiHomeAlt size={20}/>
                <span>Home</span>
              </div>
            </a>            
            <a className="group">
              <div className="flex h-4 w-full gap-2 text-zinc-400 items-center py-4 px-1 rounded-sm group-hover:bg-zinc-700 group-hover:text-zinc-100">
                <BiSearch size={20}/>
                <span>Search</span>
              </div>
            </a>            
            <a className="group">
              <div className="flex h-4 w-full gap-2 text-zinc-400 items-center py-4 px-1 rounded-sm group-hover:bg-zinc-700 group-hover:text-zinc-100">
                <BiLibrary size={20}/>
                <span>Your Library</span>
              </div>
            </a>            
          </nav>
        </div>
        <main className="bg-zinc-900 flex-grow flex flex-col">
          <div className='head mt-4 flex px-4 pl-8 w-full h-8'>
            <div className='buttons flex justify-between w-12 h-full text-white'>
              <div className='rounded-full w-10 h-10 p-2 bg-zinc-950'>
                <IoChevronBackOutline/>
              </div>
              <div className='rounded-full w-10 h-10 p-2 bg-zinc-950'>
                <IoChevronForwardOutline/>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="h-14 w-full bg-zinc-800 border-t border-zinc-700">

      </footer>
    </div>
  )
} 