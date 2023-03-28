import type { Movie as TMovie } from 'types'
import Rating from '../Rating'

export default function Movie ({ movie }: { movie: TMovie }) {
  const { title, release, image, ratingData, director, genres } = movie
  const shownGenres = genres.length > 4 ? genres.slice(0, 4) : genres
  return (
    <div className='w-[100vw] snap-start gap-[1rem] shrink-0 h-[20rem] min-w-minMobile sm:w-[400px] p-small flex border-[1px] border-solid border-black'>
      <img className='w-[12rem] h-[18rem] object-cover' src={image.url} alt={image.caption} />
      <span className='overflow-hidden'>
        <p title={title} className='text-large font-normal w-full overflow-hidden text-ellipsis whitespace-nowrap'>{title}</p>
        <span>
          <small className='text-small'>{release}</small>
          <p className='inline-block text-small ml-smaller'>{director}</p>
        </span>
        <span className='block'>
          {
            shownGenres.length > 0 && shownGenres.map((genre, i) => {
              if (i === 3) return <small className='text-small mr-smaller bg-lightGray' key={genre}>+</small>
              return <small className='text-small mr-smaller bg-lightGray' key={genre} >{genre}</small>
            })
          }
        </span>
        <Rating rating={ratingData.current} votes={ratingData.votes} />
      </span>
    </div>
  )
}
