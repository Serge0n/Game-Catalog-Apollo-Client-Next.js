import type { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"
import "@fontsource/roboto"
import "../../styles/globals.css"

export const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "http://localhost:4000",
  }),
  cache: new InMemoryCache(),
})

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Game Catalog</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
