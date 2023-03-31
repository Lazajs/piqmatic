import { MdNavigateNext } from 'react-icons/md'

export default function NextMovies ({ onClick }: { onClick: () => void }) {
  return (
    <div title='load more' onClick={onClick} className='snap-start gap-[1rem] shrink-0 mt-[4rem] mr-[4rem] ml-[2rem] h-[10rem] cursor-pointer bg-strongGreen hover:bg-brightGreen rounded-[50%] min-w-minMobile  '>
      <MdNavigateNext className='text-[100px] m-auto text-white' />
    </div>
  )
}
