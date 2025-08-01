import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navbar } from "./sections/Navbar";
import { Skills } from "./sections/Skills";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { WorkExperience } from "./sections/Work";

const theme = createTheme({
  palette: {
    primary: {
      main: "#093676",
    },
    background: {
      default: "#fcf7f8",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <WorkExperience />
    </ThemeProvider>
  );
}

export default App;
