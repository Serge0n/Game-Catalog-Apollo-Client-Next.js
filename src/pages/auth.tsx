import { NextPage } from "next"
import { SyntheticEvent, useState } from "react"
import { Box, Button, Container, TextField, Tab } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import Link from "next/link"

type AuthTab = "Sing Up" | "Sing In"

const Auth: NextPage = () => {
  const [value, setValue] = useState<AuthTab>("Sing Up")

  const handleChange = (_e: SyntheticEvent, newValue: AuthTab) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="xs">
      <Box
        height="100vh"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          height={380}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& .MuiTextField-root": { my: 1 },
          }}
        >
          <TabContext value={value}>
            <TabList onChange={handleChange}>
              <Tab label="Sing Up" value="Sing Up" />
              <Tab label="Sing In" value="Sing In" />
            </TabList>

            <TabPanel value="Sing Up">
              <TextField label="Name" fullWidth required />
              <TextField label="Email" fullWidth required />
              <TextField label="Password" type="password" fullWidth required />
              <Link href="/">
                <Button
                  sx={{ my: 1 }}
                  variant="contained"
                  size="large"
                  disableElevation
                  fullWidth
                >
                  Sing Up
                </Button>
              </Link>
            </TabPanel>

            <TabPanel value="Sing In">
              <TextField label="Name" fullWidth required />
              <TextField label="Password" type="password" fullWidth required />
              <Link href="/">
                <Button
                  sx={{ my: 1 }}
                  variant="contained"
                  size="large"
                  disableElevation
                  fullWidth
                >
                  Sing In
                </Button>
              </Link>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Container>
  )
}

export default Auth
