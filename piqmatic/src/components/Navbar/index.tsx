import { BsFilterRight } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'
import Search from '../Search'
import NavUtils from '../NavUtils'

export default function Nav () {
  return (
    <header className='border-b-[1px] border-black mb-medium'>
      <NavUtils />
      <nav className='flex h-[6rem] items-center justify-around max-w-[550px] ml-auto '>
        <IoIosArrowBack className='text-strongGreen font-large text-[35px] lg:hidden' />
        <Search />
        <BsFilterRight className='text-strongGreen text-[35px] cursor-pointer' />
      </nav>
    </header>
  )
}
