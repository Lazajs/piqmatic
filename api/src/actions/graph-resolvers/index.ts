import genres from './genres.js'
import listByGenre from './listByGenre.js'
import movieDirector from './Movie/movieDirector.js'
import movieById from './movieById.js'

const resolvers = {
  Query: {
    genres,
    listByGenre,
    movieById
  },
  Movie: {
    director: movieDirector
  }
}

export default resolvers
