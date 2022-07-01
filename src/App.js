import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Typography, ThemeProvider } from "@mui/material";
import theme from "./themes/theme.js";
import ListMovies from "./containers/ListMovies";

function App() {
  return (
    // menggunakan theme seperti context
    // lakukan dengan inject context theme didalam sini
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box p={2}>
            <Typography variant="h5">React List dan Axios</Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              display: "flex",
              gap: 2,
            }}
          >
            <Button variant="contained" color="primary">
              Halo Warna Hijau
            </Button>

            <Button variant="contained" color="secondary">
              Halo Warna Biru
            </Button>
          </Box>
        </header>
        {/* Membuat isi dari container */}
        <section>
          <ListMovies />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
