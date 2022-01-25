import { NextPage } from "next"
import { SearchGame, Filters, GamesContainer, StickyHeader } from "../components"

const Home: NextPage = () => {
  return (
    <>
      <StickyHeader />
      <SearchGame sx={{ display: "flex", flexDirection: "row", justifyContent: "center"}} my={2} />
      <Filters my={2} />
      <GamesContainer pt={2} px={2} />
    </>
  )
}

export default Home
