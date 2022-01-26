import { FC } from "react"
import { AppBar, Toolbar, Typography, Button, styled } from "@mui/material"

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar)

export const StickyHeader: FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Discovery
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Offset />
    </>
  )
}
