import { NextPage, InferGetServerSidePropsType } from "next"
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
import { client } from "./_app"

export const getServerSideProps = async () => {
  try {
    const { data } = await client.query<AllGamesQuery, AllGamesQueryVariables>({
      query: AllGamesDocument,
      variables: {
        limit: 17,
        platformId: 6,
        sortField: "rating_count",
        sortDir: "desc",
      },
    })
    return { props: { games: data?.games } }
  } catch {
    return {
      props: { games: null },
    }
  }
}

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ games }) => {
  return (
    <>
      <StickyHeader />
      <Box px={2} mx="auto">
        <SearchGame sx={{ display: "flex", justifyContent: "center" }} my={2} />
        <Filters my={2} />
        <GamesContainer pt={2} games={games} />
      </Box>
    </>
  )
}

export default Home
