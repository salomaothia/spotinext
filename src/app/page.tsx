import Image from 'next/image'
import {BiHomeAlt, BiLibrary, BiSearch} from 'react-icons/bi'
import {IoChevronBackOutline, IoChevronForwardOutline, IoChevronUp} from 'react-icons/io5'
import {ImShuffle} from 'react-icons/im'
import {FaStepBackward, FaStepForward} from 'react-icons/fa'
import {BsFillPlayFill, BsFillVolumeUpFill} from 'react-icons/bs'
import {FiRepeat} from 'react-icons/fi'
import {MdQueueMusic} from 'react-icons/md'
import {TbDevices2} from 'react-icons/tb'
import { Footer } from './components/footer/page'
import { Main } from './components/main/page'
import { Aside } from './components/aside/page'

export default async function page(){
  return(
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-grow w-full">
        <Aside/>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
} 