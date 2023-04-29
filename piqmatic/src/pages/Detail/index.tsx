import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useDetail from 'src/hooks/useDetail'
import Layout from 'src/components/Layout'
import Back from 'src/components/Back'
import { type Movie } from 'types'

import Header from './Header'

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

  if (info) {
    return (
      <Layout>
        <Back size='50px' className='text-strongGreen absolute top-1 left-1 z-10' onClick={handleClick} />
        <Header info={info} />
      </Layout>
    )
  }

  return 'loading'
}
