import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_API_URL
    : '',
  cache: new InMemoryCache()
})