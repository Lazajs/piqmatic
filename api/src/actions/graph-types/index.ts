const typeDefs = `#graphql
  type Image {
    url: String!
    caption: String!
  }

  type Movie {
    id: String!
    image: Image!
    type: String!
    title: String!
    release: Int!  
  }

  type MovieList {
    results: [Movie!]
    next: String!
    genre: String!
  } 

  type Query {
    genres: [String]
    listByGenre(genre: String!, next: String): MovieList! 
  }
`

export default typeDefs
