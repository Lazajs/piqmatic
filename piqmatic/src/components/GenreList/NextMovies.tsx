import { MdNavigateNext } from 'react-icons/md'
import Loading from '../Loading'

export default function NextMovies ({ onClick, loading }: { onClick: () => void, loading: boolean }) {
  if (loading) {
    return (
    <div className='snap-start relative gap-[1rem] shrink-0 mt-[4rem] mr-[4rem] ml-[2rem] h-[10rem] cursor-pointer bg-strongGreen rounded-[50%] min-w-minMobile  '>
      <Loading className='text-white mt-small' />
    </div>
    )
  }

  return (
    <div title='load more' onClick={onClick} className='snap-start gap-[1rem] shrink-0 mt-[4rem] mr-[4rem] ml-[2rem] h-[10rem] cursor-pointer bg-strongGreen hover:bg-brightGreen rounded-[50%] min-w-minMobile  '>
      <MdNavigateNext className='text-[100px] m-auto text-white' />
    </div>
  )
}
