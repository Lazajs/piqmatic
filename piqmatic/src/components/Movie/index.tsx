import type { Movie as TMovie } from 'types'
import Rating from '../Rating'

export default function Movie ({ movie }: { movie: TMovie }) {
  const { title, release, image, ratingData, director } = movie
  return (
    <div className='w-full gap-[1rem] h-[20rem] min-w-minMobile p-small flex'>
      <img className='w-[13rem] h-full object-cover' loading='lazy' src={image.url} alt={image.caption} />
      <span>
        <p title={title} className='text-large font-normal whitespace-nowrap overflow-hidden text-ellipsis'>{title}</p>
        <span>
          <p>{director}</p>
          <small>{release}</small>
        </span>
        <Rating rating={ratingData.current} votes={ratingData.votes} />
      </span>
    </div>
  )
}
