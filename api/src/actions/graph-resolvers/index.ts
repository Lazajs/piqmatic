import genres from './genres.js'
import listByGenre from './listByGenre.js'
import movieDirector from './movieDirector.js'

const resolvers = {
  Query: {
    genres,
    listByGenre
  },
  Movie: {
    director: movieDirector
  }
}

export default resolvers
