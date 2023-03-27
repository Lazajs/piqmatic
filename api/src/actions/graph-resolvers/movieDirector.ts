import request from '../request.js'

interface DirectorsFromAPI {
  results: {
    directors: [
      {
        credits: [
          {
            name: {
              nameText: {
                text: string
              }
            }
          }
        ]
      }
    ]
  }
}

export default async function movieDirector (root) {
  const { id } = root
  const ENDPOINT = `/titles/${id as string}?info=creators_directors_writers`
  const { results } = await request<DirectorsFromAPI>(ENDPOINT)
  return results.directors[0].credits[0].name.nameText.text
}
