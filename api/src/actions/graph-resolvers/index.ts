import genres from './genres.js'
import listByGenre from './listByGenre.js'
import movieDirector from './movieDirector.js'
import listByPage from './listByPage.js'

const resolvers = {
  Query: {
    genres,
    listByGenre,
    listByPage
  },
  Movie: {
    director: movieDirector
  }
}

export default resolvers
