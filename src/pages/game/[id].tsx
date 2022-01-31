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
import { client } from "../_app"
import Image from "next/image"

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { data } = await client.query<GameQuery, GameQueryVariables>({
      query: GameDocument,
      variables: { gameId: Number(context?.params?.id) },
    })
    console.log(data)
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
  const IMAGE_URL = `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`

  return (
    <>
      <StickyHeader />
      <Box px={2} mx="auto">
        <Image src={IMAGE_URL} width={500} height={500} />
        <Typography component="div" sx={{ p: 0.5 }}>
          {game.name}
        </Typography>
      </Box>
    </>
  )
}

export default Game
