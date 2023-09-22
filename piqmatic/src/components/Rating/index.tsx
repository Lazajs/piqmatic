import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs'

export default function Rating ({ rating, votes, color }: { rating: number, votes: number, color?: string }) {
  const realRating = rating / 2
  let restHalf = realRating % 1
  const stars = Array.from({ length: 5 }, (_, i) => {
    const ratingValue = i + 1
    if (ratingValue <= (realRating - restHalf)) return <BsStarFill key={ratingValue} color={`${color ?? '#000'}`} className='text-[25px]' />
    else if (restHalf >= 0.4) {
      restHalf = 0
      return <BsStarHalf color={`${color ?? '#000'}`} key={ratingValue} className='text-[25px]' />
    }
    return <BsStar color={`${color ?? '#000'}`} key={ratingValue} className='text-[25px]' />
  })

  return (
    <span className='flex gap-[3px]'>
      {
        stars.map(star => star)
      }
      <small className='ml-[0.5rem] leading-10 font-bold text-small'>({votes})</small>
    </span>
  )
}
