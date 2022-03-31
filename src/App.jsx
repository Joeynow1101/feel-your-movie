import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Select from "./pages/Select";
import Year from "./pages/Year";
import MovieList from "./pages/MovieList";
import { useState, useEffect } from "react";

let API_key = import.meta.env.VITE_TMDB_API_KEY;
let BASE_url = "https://api.themoviedb.org/3";
let url = BASE_url + "/discover/movie?.desc&api_key=" + API_key;

function App() {
  const [url_set, setUrl] = useState(url);
  const [movieData, setMovieData] = useState([]);
  const [year, setYear] = useState("");

  const getData = (movieType) => {
    if (movieType === "gespannt") {
      url =
        BASE_url +
        "/discover/movie?with_genres=28,12&language=de-DE&sort_by=vote_average.desc&vote_count.gte=10&primary_release_year=" +
        year +
        "&api_key=" +
        API_key;
    }
    if (movieType === "ängstlich") {
      url =
        BASE_url +
        "/discover/movie?&with_genres=27,9648&language=de-DE&sort_by=vote_average.desc&vote_count.gte=10&primary_release_year=" +
        year +
        "&api_key=" +
        API_key;
    }
    if (movieType === "kindisch") {
      url =
        BASE_url +
        "/discover/movie?&with_genres=35,16&language=de-DE&sort_by=vote_average.desc&vote_count.gte=10&primary_release_year=" +
        year +
        "&api_key=" +
        API_key;
    }
    if (movieType === "gerührt") {
      url =
        BASE_url +
        "/discover/movie?&with_genres=10749,18&language=de-DE&sort_by=vote_average.desc&vote_count.gte=10&primary_release_year=" +
        year +
        "&api_key=" +
        API_key;
    }
    if (movieType === "musikalisch") {
      url =
        BASE_url +
        "/discover/movie?&with_genres=10402&language=de-DE&sort_by=vote_average.desc&vote_count.gte=10&primary_release_year=" +
        year +
        "&api_key=" +
        API_key;
    }
    if (movieType === "nostalgisch") {
      url =
        BASE_url +
        "/discover/movie?&with_genres=36&language=de-DE&sort_by=vote_average.desc&vote_count.gte=10&primary_release_year=" +
        year +
        "&api_key=" +
        API_key;
    }
    if (movieType === "wissbegierig") {
      url =
        BASE_url +
        "/discover/movie?&with_genres=99&language=de-DE&sort_by=vote_average.desc&vote_count.gte=10&primary_release_year=" +
        year +
        "&api_key=" +
        API_key;
    }
    if (movieType === "verträumt") {
      url =
        BASE_url +
        "/discover/movie?&with_genres=878,14&language=de-DE&sort_by=vote_average.desc&vote_count.gte=10&primary_release_year=" +
        year +
        "&api_key=" +
        API_key;
    }
    setUrl(url);
  };

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results);
      });
  }, [url_set]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='year'
          element={<Year year={year} setYear={setYear} />}></Route>
        <Route path='select' element={<Select props={{ getData }} />}></Route>
        <Route
          path='movielist'
          element={<MovieList props={{ movieData }} />}></Route>
      </Routes>
    </>
  );
}

export default App;
