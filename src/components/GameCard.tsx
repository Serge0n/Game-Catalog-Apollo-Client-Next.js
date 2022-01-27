import { FC } from "react"
import { Box, Card, CardMedia, Typography } from "@mui/material"
interface GameCardProps {
  name?: string
  coverId?: string
}

export const GameCard: FC<GameCardProps> = ({ name, coverId }) => {
  const IMAGE_URL = `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${coverId}.jpg`

  return (
    <Card>
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={IMAGE_URL}
          alt={name}
          sx={{
            width: "100%",
            "&:hover": { transform: "scale(1.1)" },
            transition: "transform .3s",
          }}
        />
      </Box>
      <Typography component="div" sx={{ p: 0.5 }}>
        {name}
      </Typography>
    </Card>
  )
}
