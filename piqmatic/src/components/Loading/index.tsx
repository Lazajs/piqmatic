import { BsDot } from 'react-icons/bs'

export default function Loading () {
  return (
    <div className='flex w-fit relative'>
      <BsDot className='text-[60px] absolute left-0  text-strongGreen bounce one m-0 p-0' />
      <BsDot className='text-[60px] absolute left-[2rem] text-strongGreen bounce two m-0 p-0'/>
      <BsDot className='text-[60px] absolute left-[4rem] text-strongGreen scale-150 bounce three m-0 p-0'/>
    </div>
  )
}
