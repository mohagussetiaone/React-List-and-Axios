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
      {/* deklarasi div dengan nama class App */}
      <div className="App">
        {/* deklarasi tag header dengan nama class App-Header */}
        <header className="App-header">
          {/* mendeklarasikan component dari Box  yang mempunyai atribute p (dapat dibaca pada dokumentasi MUI) */}
          <Box p={2}>
            {/* mendeklarasikan Typography untuk penulisan (dapat dilihat pada dokumentasi MUI) */}
            <Typography variant="h5">React List dan Axios</Typography>
            {/* Tag penutup Box */}
          </Box>
          {/* membuat box kembali dengan atribute sx yakni menerima value untuk p=> padding, display untuk tipe flex dan mempunyai gap 2 */}
          <Box
            sx={{
              p: 2,
              display: "flex",
              gap: 2,
            }}
          >
            {/* membuat component Button dengan atribute variant (dapat dilihat pada dokumentasi MUI, yang mempunyai atribute color dengan primary (yang diambil dari theme.js dan dapat bekerja karena sudah terimport)) */}
            <Button variant="contained" color="primary">
              Halo Warna Hijau
            </Button>
            {/* membuat component Button dengan atribute variant (dapat dilihat pada dokumentasi MUI, yang mempunyai atribute color dengan secondary (yang diambil dari theme.js dan dapat bekerja karena sudah terimport)) */}
            <Button variant="contained" color="secondary">
              Halo Warna Biru
            </Button>
          </Box>
          {/* Penutup tag header */}
        </header>
        {/* Membuat isi dari container */}
        {/* penutup dari section */}
        <section>
          {/* memuat component ListMovies pada folder src => component */}
          <ListMovies />
        </section>
      </div>
      {/* tag penutup Theme Provider */}
    </ThemeProvider>
  );
}

export default App;
