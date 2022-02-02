import { IncomingMessage, ServerResponse } from "http"
import { useMemo } from "react"
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client"
import { AppProps } from "next/app"

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__"

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

const createApolloClient = () => {
  console.log(typeof window)

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createHttpLink({
      uri: "http://localhost:4000",
    }),
    cache: new InMemoryCache(),
  })
}

export const initializeApollo = (
  initialState: any = null
  // Pages with Next.js data fetching methods, like `getStaticProps`, can send
  // a custom context which will be used by `SchemaLink` to server render pages
  // context?: ResolverContext
) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps["pageProps"]
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export const useApollo = (initialState: any) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
