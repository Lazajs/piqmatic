import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

const cache = new InMemoryCache(
  {
    typePolicies: {
      Query: {
        fields: {
          listByGenre: {
            keyArgs: ['genre'],
            merge (existing, incoming) {
              if (!existing?.results || existing.results.length === 0) return incoming
              return {
                ...incoming,
                results: existing.results.concat(incoming.results)
              }
            }
          }
        }
      }
    }
  }
)

const client = new ApolloClient({
  uri: 'http://localhost:3001/',
  connectToDevTools: true,
  cache
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
