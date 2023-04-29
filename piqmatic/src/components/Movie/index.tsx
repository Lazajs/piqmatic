import type { Movie as TMovie } from 'types'
import Rating from '../Rating'
import { Link } from 'react-router-dom'
import GenreText from '../GenreText'

export default function Movie ({ movie }: { movie: TMovie }) {
  const { title, release, image, ratingData, director, genres, id, duration } = movie
  const shownGenres = genres.length > 4 ? genres.slice(0, 4) : genres
  return (
    <Link to={`/detail/${id}`} state={movie} >
      <div className='snap-start gap-[1rem] shrink-0 h-[20rem] min-w-minMobile w-[400px] p-small flex border-[1px] border-solid border-black'>
        <img className='w-[12rem] h-[18rem] object-cover' src={image.url} alt={image.caption} />
        <span className='overflow-hidden'>
          <p title={title} className='text-large font-normal w-full overflow-hidden text-ellipsis whitespace-nowrap'>{title}</p>
          <span>
            <small className='text-small'>{release}</small>
            <p className='inline-block text-small ml-smaller'>{director}</p>
            {duration && <p className='inline-block text-small ml-smaller'>{duration}</p>}
          </span>
          <span className='block'>
            <GenreText genres={shownGenres} />
          </span>
          <Rating rating={ratingData.current} votes={ratingData.votes} />
        </span>
      </div>
    </Link>
  )
}
