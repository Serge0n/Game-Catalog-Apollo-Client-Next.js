import { FC } from "react"
import {
  CardMedia,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material"
import { DateTime } from "luxon"
import { AllGamesQuery } from "../../generated/schema"
import Link from "next/link"
interface GameCardProps {
  game: NonNullable<NonNullable<AllGamesQuery["games"]>[number]>
}

export const GameCard: FC<GameCardProps> = ({ game }) => {
  const IMAGE_URL = `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${game.cover.image_id}.jpg`
  const firstRealeseDate = DateTime.fromSeconds(
    game.first_release_date
  ).toLocaleString(DateTime.DATE_MED)
  const subTitle = () => (
    <>
      <Typography variant="inherit">{`Released: ${firstRealeseDate}`}</Typography>
      <Typography variant="inherit">{`Total rating: ${game.total_rating?.toFixed(
        2
      )}`}</Typography>
    </>
  )

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
        <ImageListItemBar title={game.name} subtitle={subTitle()} />
      </ImageListItem>
    </Link>
  )
}
