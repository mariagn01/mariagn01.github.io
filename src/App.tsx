import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navbar } from "./sections/Navbar";
import { Skills } from "./sections/Skills";
import { Hero } from "./sections/hero";
import { Projects } from "./sections/Projects";
import { WorkExperience } from "./sections/Work";
import { Contact } from "./sections/Contact";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A8B2D1",
      light: "#CCD6F6",
      dark: "#8892B0",
    },
    secondary: {
      main: "#CCD6F6",
    },
    background: {
      default: "#0A192F",
      paper: "#0F1B36",
    },
    text: {
      primary: "#CCD6F6",
      secondary: "#8892B0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-outlined": {
            borderColor: "#A8B2D1",
            color: "#A8B2D1",
            "&:hover": {
              borderColor: "#CCD6F6",
              backgroundColor: "rgba(168, 178, 209, 0.1)",
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          backgroundColor: "rgba(168, 178, 209, 0.1)",
          borderColor: "#A8B2D1",
          color: "#CCD6F6",
          "&:hover": {
            backgroundColor: "rgba(168, 178, 209, 0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#112240",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
