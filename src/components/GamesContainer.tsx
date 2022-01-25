import { Grid, Box, BoxProps } from "@mui/material"
import { GameCard } from "."
import { FC } from "react"

export const GamesContainer: FC<BoxProps> = props => {
  return (
    <Box {...props}>
      {/* xs: 0px, sm: 600px, md: 900px, lg: 1200px, xl: 1536px */}
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 10 }}
      >
        {Array.from(Array(24)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4} lg={3} xl={2} key={index}>
            <GameCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
