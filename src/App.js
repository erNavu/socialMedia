
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { useState } from "react";


const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      baseColor: {
        main: "#f0f0f0",
        dark: "#171517"
      },
      iconColor: {
        main: "#757575",
        dark: "#ffffff"
      },

    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={{ xs: 0, sm: 2 }} justifyContent="center" >
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
