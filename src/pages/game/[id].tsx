import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next"
import { Box, Typography } from "@mui/material"
import { StickyHeader } from "../../components"
import {
  GameQuery,
  GameQueryVariables,
  GameDocument,
} from "../../../generated/schema"
import Head from "next/head"
import { GameCarousel } from "../../components/GameCarousel"
import { initializeApollo } from "../../lib/apolloClient"

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const client = initializeApollo()
  try {
    const { data } = await client.query<GameQuery, GameQueryVariables>({
      query: GameDocument,
      variables: { gameId: Number(context?.params?.id) },
    })

    if (!data?.game) return { props: { notFound: true } }

    return { props: { game: data.game } }
  } catch {
    return { props: { notFound: true } }
  }
}

interface GameProps {
  game: NonNullable<
    NonNullable<InferGetServerSidePropsType<typeof getServerSideProps>>["game"]
  >
}

const Game: NextPage<GameProps> = ({ game }) => {
  return (
    <>
      <Head>
        <title>{game.name}</title>
      </Head>
      <StickyHeader />
      <Box
        height="100vh"
        px={2}
        mx="auto"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h5" py={2}>
          {game.name}
        </Typography>
        <GameCarousel screenshotIds={game.screenshots} maxWidth={1300} />
        <Typography variant="subtitle1" mx={5} p={1}>
          {game.summary}
        </Typography>
        <Typography variant="subtitle1" mx={5} p={1}>
          {game.storyline}
        </Typography>
      </Box>
    </>
  )
}

export default Game
