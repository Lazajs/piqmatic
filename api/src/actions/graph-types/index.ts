const typeDefs = `#graphql
  type Image {
    url: String!
    caption: String!
  }

  type Rating {
    current: Float!
    votes: Int!
  }

  type Movie {
    id: String!
    image: Image!
    type: String!
    title: String!
    release: Int!
    ratingData: Rating!
    director: String!
    genres: [String]!
    description: String!
    duration: String
  }

  type MovieList {
    results: [Movie!]
    next: String!
    genre: String!
  } 

  type Query {
    genres: [String]
    listByGenre(genre: String!, next: String): MovieList!
    movieById(id: String!): Movie!
  }
`

export default typeDefs
