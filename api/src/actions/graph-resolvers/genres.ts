import request from '../request.js'

export interface GenresResult {
  results: string[]
}

export default async function genres () {
  const ENDPOINT = '/titles/utils/genres'
  const genreList = await request<GenresResult>(ENDPOINT)
  genreList.results.shift() // Delete first null
  return genreList.results.filter(genre => genre !== 'Adult' && genre !== 'Short')
}
