import fetch from 'node-fetch'
import 'dotenv/config'

const { API_KEY } = process.env

export default async function request<TMovieList> (endpoint: string): Promise<TMovieList> {
  const options = {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  }

  return await fetch(`https://moviesdatabase.p.rapidapi.com${endpoint}`, options)
    .then(async response => await response.json())
    .then(json => json as TMovieList)
}
