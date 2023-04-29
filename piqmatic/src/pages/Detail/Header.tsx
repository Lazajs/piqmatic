import { type Movie } from 'types'
import GenreText from 'src/components/GenreText'
import Rating from 'src/components/Rating'

export default function Header ({ info }: { info: Movie }) {
  return (
    <header className='bg-simpleGreen w-[95%] relative flex flex-col mt-[4rem] h-fit p-[2rem] rounded-xl m-auto items-center pt-large'>
          <img src={info.image.url} alt={info.image.caption} className='w-[20rem] h-[20rem] object-contain' />
          <h1 className='font-black text-large my-smaller'>{info.title}</h1>
          <span className='flex justify-between gap-[1rem]'>
            <small className='text-normal '>{info.release}</small>
            <small className='text-normal '>{info.duration}</small>
            <small className='text-normal '>{info.director}</small>
          </span>
          <span className='my-smaller'>
            <GenreText genres={info.genres} />
          </span>
          <footer className='flex flex-col items-center'>
            <span className='flex items-center justify-center h-[5rem]'>
              <b className='text-large m-small'>{Math.round(info.ratingData.current / 2)}</b>
              <Rating rating={info.ratingData.current} votes={info.ratingData.votes}/>
            </span>
            <span className='max-w-[400px]'>
              <p className='font-normal text-small text-center mb-[1rem]'>{info.description}</p>
            </span>
            <button type="button" className="py-2 px-4  bg-lightGreen hover:bg-mediumGreen focus:ring-strongGreen focus:ring-offset-indigo-200 text-white w-full max-w-[300px] transition ease-in duration-200 text-center text-normal font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Mark as seen
            </button>
          </footer>
        </header>
  )
}
