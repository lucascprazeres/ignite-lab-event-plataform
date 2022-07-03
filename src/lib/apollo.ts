import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  //@ts-ignore
  uri: import.meta.env.VITE_API_URL,
  cache: new InMemoryCache(),
  // headers: {
  //   'Authorization': `${import.meta.env.VITE_API_ACCESS_TOKEN}`
  // }
})