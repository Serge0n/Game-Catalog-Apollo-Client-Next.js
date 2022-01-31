import { FC } from "react"
import { Grid, Box, BoxProps } from "@mui/material"
import { GameCard } from "../components"
import { AllGamesQuery } from "../../generated/schema"

interface GamesContainerProps extends BoxProps {
  games: NonNullable<AllGamesQuery["games"]>
}

export const GamesContainer: FC<GamesContainerProps> = ({ games }, ...rest) => {
  return (
    <Box {...rest}>
      {/* xs: 0px, sm: 600px, md: 900px, lg: 1200px, xl: 1536px */}
      <Grid
        container
        spacing={1}
        rowSpacing={0.5}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 10 }}
      >
        {games?.map((game, index) => {
          if (!game) return
          return (
            <Grid item xs={4} sm={4} md={4} lg={3} xl={2} key={index}>
              <GameCard game={game} key={game.slug} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
