import { gql } from '@apollo/client'

export const GET_GENRES = gql`
  query {
    genres
  }
`

export const GET_LIST_BY_GENRE = gql`
  query ($genre: String!, $next: String) {
  listByGenre(genre: $genre, next: $next) {
    next
    genre
    results {
      id
      image {
        url
        caption
      }
      release
      title
      type
      description
      director
      ratingData {
        current
        votes
      }
      genres
    }
  }
}
`
