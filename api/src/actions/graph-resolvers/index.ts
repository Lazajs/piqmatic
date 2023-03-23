import genres from './genres.js'
import listByGenre from './listByGenre.js'

const resolvers = {
  Query: {
    genres,
    listByGenre
  }
}

export default resolvers
