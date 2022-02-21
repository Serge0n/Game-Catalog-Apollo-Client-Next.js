import { IncomingMessage, ServerResponse } from "http"
import { useMemo } from "react"
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client"
import { AppProps } from "next/app"
import merge from "deepmerge"
import { isEqual } from "lodash"

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__"
let apolloClient: ApolloClient<NormalizedCacheObject> | undefined
export type ResolverContext = { req?: IncomingMessage; res?: ServerResponse }

function createIsomorphLink() {
  // if (typeof window === 'undefined') {
  //   //server DIDN'T WORK! WHY!?!?!?!?!?!??!?!?!?!?!?!?!
  //   const { readFileSync } = require("fs")
  //   const { resolve } = require("path")
  //   const { SchemaLink } = require('@apollo/client/link/schema')
  //   const schema = readFileSync(resolve("generated/schema.graphql"), { encoding: "utf8" })
  //   return new SchemaLink({ schema })
  // } else {
  //client
  return createHttpLink({
    uri: "http://localhost:4000",
    credentials: "same-origin",
  })
  // }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()
  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    })
    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
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

export function useApollo(pageProps: AppProps["pageProps"]) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}
