import React from "react";
// import MUI
import { Box, Typography } from "@mui/material";
// import css dari ListMovies.css
import "./ListMovies.css";
// menggunakan json secara langsung
import jsonMovies from "../data/movies.json";
import CardMovie from "../components/CardMovie";

const ListMovies = () => {
  return (
    <Box className="boxy">
      <Typography variant="h5">Container for ListMovies</Typography>
      {/* Menggunakan suatu looping */}
      {/* menerima fungsi map dengan parameter movie */}
      {jsonMovies.results.slice(-3).map((movie) => {
        // return component jangan lupa untuk menggunakan key sebagai syarat
        return <CardMovie key={movie.id} propsMovie={movie} />;
      })}
    </Box>
  );
};

export default ListMovies;
