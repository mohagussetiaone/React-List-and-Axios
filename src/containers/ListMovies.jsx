import React, { useEffect, useState } from "react";
// import MUI
import { accordionSummaryClasses, Box, Typography } from "@mui/material";
// import css dari ListMovies.css
import "./ListMovies.css";
// menggunakan json secara langsung
import jsonMovies from "../data/movies.json";
import CardMovie from "../components/CardMovie";
// import axios
import axios from "axios";

const ListMovies = () => {
  // membungkus dalam try catch block
  // membuat state
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // didalam sini kita akan menggunakan axios
    // membuat dalam bentuk async await dalam bentuk function lagi
    const fetchDataMovies = async () => {
      // membungkus dalam try cacth untuk penanganan error
      try {
        // jika menggunakan async await maka axios.get kita gunakan sebagai variabel
        // pada https://api.themoviedb.org/3 adalah base dari urlnya
        // pada movie/popular merupakan end point yang mempunyai method GET (dapat dilihat pada dokumentasi pemiliknya)
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=63c2d7a15b4bfa0cf662f2bd615f10e0");
        // untuk mendapatkan data maka kita gunakan response.data.results (dalam json)
        setMovies(response.data.results);
      } catch (err) {
        console.log("Error nih", err);
      }
    };

    // memanggil (invoke) function fecth data supaya dapat menjalankan useEf
    fetchDataMovies();
  });

  return (
    <Box className="boxy">
      <Typography variant="h5">Container for ListMovies</Typography>
      {/* Menggunakan suatu looping */}
      {/* menerima fungsi map dengan parameter movie */}
      {/* dari variabel state kita mappingkan */}
      {movies.map((movie) => {
        // return component jangan lupa untuk menggunakan key sebagai syarat
        return <CardMovie key={movie.id} propsMovie={movie} />;
      })}
    </Box>
  );
};

export default ListMovies;
