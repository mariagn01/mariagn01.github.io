import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/hero";
import { Projects } from "./sections/Projects";

const theme = createTheme({
  palette: {
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
      <Projects />
    </ThemeProvider>
  );
}

export default App;
