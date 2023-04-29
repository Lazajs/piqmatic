export default function GenreText ({ genres = [] }: { genres?: string[] }) {
  return (
    <>
      {
        genres.length > 0 && genres.map((genre, i) => {
          if (i === 3) return <small className='text-small mr-smaller bg-lightGray' key={genre}>+</small>
          else if (i > 3) return ''
          return <small className='text-small mr-smaller bg-lightGray' key={genre} >{genre}</small>
        })
      }
    </>

  )
}
