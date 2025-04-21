import { GRAPHQL_URL } from '@/constants/apiUrl'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: GRAPHQL_URL || 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

export default client
