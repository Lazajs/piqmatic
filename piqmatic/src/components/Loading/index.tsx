import { BsDot } from 'react-icons/bs'

export default function Loading ({ className }: { className?: string }) {
  return (
    <div className={`block m-auto ${className ?? 'text-strongGreen'}`}>
      <div className='flex w-[100px] relative h-[60px]'>
        <BsDot className='text-[60px] absolute left-0 bounce one m-0 p-0' />
        <BsDot className='text-[60px] absolute left-[2rem] bounce two m-0 p-0'/>
        <BsDot className='text-[60px] absolute left-[4rem] scale-150 bounce three m-0 p-0'/>
      </div>
    </div>
  )
}
