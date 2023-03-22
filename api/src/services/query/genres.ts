import fetch from 'node-fetch'

export interface GenresResult {
  results: string[]
}

export default async function getGenres () {
  const response = await fetch('https://moviesdatabase.p.rapidapi.com/titles/utils/genres', {
    headers: {
      'X-RapidAPI-Key': '143bdaf3d0mshb6795f416851002p1be6b5jsn287c0c1801ee',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  })
  const json = await response.json() as GenresResult
  console.log(json)
  json.results.shift() // Delete first null 
  return json.results
}
