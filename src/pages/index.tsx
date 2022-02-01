import { NextPage, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { Box } from "@mui/material"
import {
  SearchGame,
  Filters,
  GamesContainer,
  StickyHeader,
} from "../components"
import {
  AllGamesDocument,
  AllGamesQuery,
  AllGamesQueryVariables,
} from "../../generated/schema"
import { initializeApollo } from "../lib/apolloClient"

export const getServerSideProps = async () => {
  const client = initializeApollo()
  try {
    const { data } = await client.query<AllGamesQuery, AllGamesQueryVariables>({
      query: AllGamesDocument,
      variables: {
        limit: 12,
        platformId: 6,
        sortField: "rating_count",
        sortDir: "desc",
      },
    })

    if (!data?.games) return { props: { notFound: true } }

    return { props: { games: data.games } }
  } catch {
    return { props: { notFound: true } }
  }
}

interface HomeProps {
  games: NonNullable<
    InferGetServerSidePropsType<typeof getServerSideProps>["games"]
  >
}

const Home: NextPage<HomeProps> = ({ games }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <StickyHeader />
      <Box px={2} mx="auto">
        <SearchGame sx={{ display: "flex", justifyContent: "center" }} my={2} />
        <Filters my={2} />
        <GamesContainer games={games} />
      </Box>
    </>
  )
}

export default Home
