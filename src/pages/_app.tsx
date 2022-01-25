import type { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import "@fontsource/roboto"
import "../../styles/globals.css"

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
})

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Apollo-Client Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
