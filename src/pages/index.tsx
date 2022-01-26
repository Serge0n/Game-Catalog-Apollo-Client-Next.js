import { NextPage } from "next"
import { Box } from "@mui/material"
import {
  SearchGame,
  Filters,
  GamesContainer,
  StickyHeader,
} from "../components"

const Home: NextPage = () => {
  return (
    <>
      <StickyHeader />
      <Box px={2} mx="auto">
        <SearchGame
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
          my={2}
        />
        <Filters my={2} />
        <GamesContainer pt={2} />
      </Box>
    </>
  )
}

export default Home
