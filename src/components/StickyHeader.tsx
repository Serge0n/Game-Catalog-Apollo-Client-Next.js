import { FC } from "react"
import { AppBar, Toolbar, Typography, Button, styled } from "@mui/material"
import Link from "next/link"

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar)

export const StickyHeader: FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Discovery
          </Typography>

          <Link href="/auth">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Offset />
    </>
  )
}
