import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useDetail from 'src/hooks/useDetail'
import Layout from 'src/components/Layout'
import Back from 'src/components/Back'
import { type Movie } from 'types'

import GenreText from 'src/components/GenreText'
import Rating from 'src/components/Rating'

export default function Detail () {
  const { pathname, state } = useLocation()
  const navigate = useNavigate()
  const [info, setInfo] = useState<Movie>(state)
  const { getMovieDetail, data } = useDetail()

  useEffect(() => {
    if (!info && !data) getMovieDetail(pathname.split('/')[2])
    else if (!info && data) setInfo(data.movieById)
  }, [data])

  const handleClick = () => {
    navigate('/')
  }

  if (!info) return 'loading'

  return (
      <Layout>
        <Back size='50px' className='text-strongGreen absolute top-1 left-1 z-10' onClick={handleClick} />
        <article className='bg-simpleGreen w-[95%] relative flex flex-col mt-[4rem] h-fit p-[2rem] rounded-xl m-auto items-center pt-large'>
          <img src={info.image.url} alt={info.image.caption} className='w-[33rem] h-[21rem] object-cover rounded-[11px]' />
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
              <Rating color='#89E045' rating={info.ratingData.current} votes={info.ratingData.votes}/>
            </span>
            <span className='max-w-[400px]'>
              <p className='font-normal text-small text-center leading-[2] mb-[1rem]'>{info.description}</p>
            </span>
            <button type="button" className="py-2 px-4 bg-lightGreen hover:bg-mediumGreen focus:ring-strongGreen focus:ring-offset-indigo-200 text-white w-full max-w-[300px] transition ease-in duration-200 text-center text-normal font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Mark as seen
            </button>
          </footer>
        </article>
      </Layout>
  )
}
