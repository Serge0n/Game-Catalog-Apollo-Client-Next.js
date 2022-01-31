import { FC } from "react"
import { CardMedia, ImageListItem, ImageListItemBar } from "@mui/material"
import Link from "next/link"
import { AllGamesQuery } from "../../generated/schema"
interface GameCardProps {
  game: NonNullable<NonNullable<AllGamesQuery["games"]>[number]>
}

export const GameCard: FC<GameCardProps> = ({ game }) => {
  const IMAGE_URL = `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${game.cover.image_id}.jpg`

  return (
    <Link href={`/game/${game.id}`}>
      <ImageListItem sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={IMAGE_URL}
          alt={game.name}
          sx={{
            width: "100%",
            "&:hover": { transform: "scale(1.1)" },
            transition: "transform .3s",
          }}
        />
        <ImageListItemBar title={game.name} subtitle={game.total_rating} />
      </ImageListItem>
    </Link>
  )
}
