import { Box, BoxProps } from "@mui/material"
import { FC } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { GameQuery } from "../../generated/schema"

interface GameCarouselProps extends BoxProps {
  screenshotIds: NonNullable<GameQuery["game"]>["screenshots"]
}

export const GameCarousel: FC<GameCarouselProps> = ({
  screenshotIds,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Carousel emulateTouch autoPlay infiniteLoop>
        {screenshotIds?.map(screenshot => {
          const IMAGE_URL = `https://images.igdb.com/igdb/image/upload/t_screenshot_huge/${screenshot?.image_id}.jpg`

          return (
            <div key={screenshot?.image_id}>
              <img src={IMAGE_URL} />
            </div>
          )
        })}
      </Carousel>
    </Box>
  )
}
