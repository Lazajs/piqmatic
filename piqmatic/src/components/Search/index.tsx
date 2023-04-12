import { BiSearchAlt2 } from 'react-icons/bi'
import useInputValue from 'src/hooks/useInputValue'

export default function Search () {
  const { value, onChange } = useInputValue()

  return (
        <span className='basis-3/4 h-[4rem]'>
          <BiSearchAlt2 className='text-strongGreen text-[35px] absolute ml-[1rem] mt-[0.5rem]' />
          <input value={value} onChange={onChange} type="text" className='bg-lightGreen border-none outline-none p-small pl-[5rem] text-normal text-textBlack font-normal h-full w-full rounded-xl' />
        </span>
  )
}
