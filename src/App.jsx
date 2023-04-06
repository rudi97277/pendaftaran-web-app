import { ThemeProvider } from "@mui/material";
import theme from "./config/theme";
import Routing from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
