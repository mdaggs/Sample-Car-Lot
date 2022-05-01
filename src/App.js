import MainContainer from "./components/MainContainer";
import TopBar from "./components/TopBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TopBar />
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;
