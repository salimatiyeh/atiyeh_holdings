import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Houses from "./components/Houses.jsx";
import House from "./components/House.jsx";
import Navbar from "./components/Navbar.jsx";
import NewHouseForm from "./components/NewHouseForm.jsx";
import Box from "@mui/material/Box";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { useMemo, useState } from "react";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(() => (prefersDarkMode ? "dark" : "light"));
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar colorMode={colorMode} />
        <Box margin="15px auto" maxWidth="1440px" padding="0 15px">
          <Routes>
            <Route path="/houses/new" element={<NewHouseForm />} />
            <Route path="/houses/:id" element={<House />} />
            <Route path="/houses" element={<Houses />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
