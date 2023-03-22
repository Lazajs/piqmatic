import './App.css'
import { useQuery } from '@apollo/client/react'
import {GET_GENRES} from './services/queries'
import {useEffect} from 'react'

export default function App () {
  const {loading,error,data} = useQuery(GET_GENRES)
  useEffect(()=> {
    console.log(data)
  },[data])
  return (
    <h1>hello world</h1>
  )
}
