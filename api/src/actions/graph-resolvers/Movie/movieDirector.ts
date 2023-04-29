import request from '../../request.js'

interface DirectorsFromAPI {
  results: {
    writers: []
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

interface WritersFromAPI {
  results: {
    directors: []
    writers: [
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
  const { results } = await request<DirectorsFromAPI | WritersFromAPI>(ENDPOINT)
  const director = results.directors[0]?.credits[0].name.nameText.text
  const writer = results.writers[0]?.credits[0].name.nameText.text
  return director || writer || 'Unknown Director'
}
