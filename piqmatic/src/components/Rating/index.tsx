import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function Rating ({ rating, votes }: { rating: number, votes: number }) {
  const realRating = Math.round(rating / 2)
  const stars = Array.from({ length: 5 }, (_, i) => {
    const ratingValue = i + 1
    if (ratingValue <= realRating) return <AiFillStar key={ratingValue} className='text-[20px]' />
    return <AiOutlineStar key={ratingValue} className='text-[20px]' />
  })

  return (
    <span className='flex gap-[3px]'>
      {
        stars.map(star => star)
      }
      <small className='ml-[0.5rem] font-bold text-small'>({votes})</small>
    </span>
  )
}
