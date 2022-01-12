import { NextPage } from "next"
import { AppBar, Box, Toolbar, Typography, Button, IconButton} from "@mui/material"

const Home: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Discovery
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Home
