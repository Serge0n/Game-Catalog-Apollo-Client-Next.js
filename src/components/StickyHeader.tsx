import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import { FC } from "react"

export const StickyHeader: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Discovery
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}