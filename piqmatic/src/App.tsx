import { useQuery } from '@apollo/client/react'
import { GET_GENRES } from './services/queries'
import { useEffect } from 'react'

export default function App () {
  const { data } = useQuery(GET_GENRES) // returns {data, loading, error}

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <h1 className='text-[2rem]'>hello world</h1>
  )
}
