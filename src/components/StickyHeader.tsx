import { FC } from "react"
import { AppBar, Toolbar, Typography, Button, styled } from "@mui/material"
import logo from "../../public/logo.png"
import Link from "next/link"
import Image from "next/image"

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar)

export const StickyHeader: FC = () => {
  return (
    <>
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <Link href="/">
            <Button>
              <Image
                src={logo}
                width="50"
                height="50"
                alt="Logo"
                placeholder="blur"
              />
            </Button>
          </Link>

          <Typography variant="h6" component="div">
            <Link href="/">
              <Button color="inherit">Discovery</Button>
            </Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Button color="inherit">My Games</Button>
            </Link>
          </Typography>

          <Typography variant="h6" component="div">
            <Link href="/auth">
              <Button color="inherit">Login</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Offset />
    </>
  )
}
