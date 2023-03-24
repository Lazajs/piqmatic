import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './actions/graph-types/index.js'
import resolvers from './actions/graph-resolvers/index.js'
import 'dotenv/config'

const server = new ApolloServer({ typeDefs, resolvers })

const port = process.env.PORT || 3001

const { url } = await startStandaloneServer(server, {
  listen: { port: port as number }
})

console.log(`Apollo running on ${url}`)
