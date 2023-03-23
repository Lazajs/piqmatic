import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import dotenv from 'dotenv'
import typeDefs from './actions/graph-types/index.js'
import resolvers from './actions/graph-resolvers/index.js'

dotenv.config()

const server = new ApolloServer({ typeDefs, resolvers })

const { PORT } = process.env
const port = PORT || 3001

const { url } = await startStandaloneServer(server, {
  listen: { port: +port }
})

console.log(`Apollo running on ${url}`)
