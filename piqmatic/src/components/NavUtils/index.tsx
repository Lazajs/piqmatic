import { BsFillCollectionPlayFill } from 'react-icons/bs'
import { HiOutlineUser } from 'react-icons/hi'
import { AiOutlineBarChart } from 'react-icons/ai'

export default function NavUtils () {
  return (
    <nav className='fixed h-[5rem] lg:w-[380px] lg:absolute lg:top-[1rem] lg:left-0 lg:bg-transparent bottom-0 z-10 w-full items-center bg-lightGreen justify-around lg:max-w-[380px] ml-auto '>
      <div className='flex items-center justify-around w-full h-full max-w-[400px] m-auto'>
        <HiOutlineUser className='text-textWhite cursor-pointer font-large lg:text-lightGreen text-[35px]' />
        <AiOutlineBarChart className='text-textWhite cursor-pointer lg:text-lightGreen font-large text-[35px]' />
        <BsFillCollectionPlayFill className='text-textWhite cursor-pointer lg:text-lightGreen font-large text-[35px]' />
      </div>
    </nav>
  )
}
