import './App.css'
import Hero from './sections/hero'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  );
}


export default App
