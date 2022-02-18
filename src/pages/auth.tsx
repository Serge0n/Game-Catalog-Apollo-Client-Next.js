import { NextPage } from "next"
import { SyntheticEvent, useState } from "react"
import { Box, Button, Container, TextField, Tab } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import Link from "next/link"
import {
  useUserSignInMutation,
  useUserSignUpMutation,
} from "../../generated/schema"

type AuthTab = "Sing Up" | "Sing In"

const Auth: NextPage = () => {
  const [value, setValue] = useState<AuthTab>("Sing Up")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userSignUpMutation] = useUserSignUpMutation({
    variables: { name, email, password },
  })

  const [userSignInMutation] = useUserSignInMutation({
    variables: { email, password },
  })

  const handleChange = (_e: SyntheticEvent, newValue: AuthTab) => {
    setValue(newValue)
  }

  const handleSubmit = async (type: AuthTab) => {
    if (type === "Sing Up") {
      const { data } = await userSignUpMutation()
      localStorage.setItem("token", data?.signUp?.token || "")
    } else {
      const { data } = await userSignInMutation()
      localStorage.setItem("token", data?.signIn?.token || "")
    }
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
              <TextField
                label="Name"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
                required
              />
              <Link href="/" passHref>
                <Button
                  sx={{ my: 1 }}
                  variant="contained"
                  size="large"
                  disableElevation
                  fullWidth
                  onClick={() => handleSubmit("Sing Up")}
                >
                  Sing Up
                </Button>
              </Link>
            </TabPanel>

            <TabPanel value="Sing In">
              <TextField
                label="Email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                fullWidth
                required
              />
              <Link href="/" passHref>
                <Button
                  sx={{ my: 1 }}
                  variant="contained"
                  size="large"
                  onClick={() => handleSubmit("Sing In")}
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
