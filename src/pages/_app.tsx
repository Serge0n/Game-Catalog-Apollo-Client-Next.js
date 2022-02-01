import type { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ApolloProvider } from "@apollo/client"
import "@fontsource/roboto"
import "../../styles/globals.css"
import { useApollo } from "../lib/apolloClient"

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Game Catalog</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
