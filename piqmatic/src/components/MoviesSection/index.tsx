import GenreList from '../GenreList'

export default function MovieSection ({ query }: { query: string[] | undefined }) {
  return (
     <section className='flex-col gap-[3rem] flex'>
          {query?.map(genre => <GenreList key={genre} genre={genre} />)}
      </section>
  )
}
