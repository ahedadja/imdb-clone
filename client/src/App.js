import * as React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./Views/Home"
import About from "./Views/About"
import Header from "./Components/Header"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Top250MoviesPage from "./Views/Top250MoviesPage"
import Top250TvShowsPage from "./Views/Top250TvShowsPage"
import Contact from "./Views/Contact"
import { Box } from "@mui/material"
import MostPopularMovies from "./Views/MostPopularMovies"
import MostPopularTvShows from "./Views/MostPopularTvShows"
import TopBoxOffice from "./Views/TopBoxOffice"
import TopActionMovies from "./Views/TopActionMovies"
import Top10MoviesPage from "./Views/Top10MoviePage"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="top250movies" element={<Top250MoviesPage />} />
          <Route path="top250tvshows" element={<Top250TvShowsPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mostpopularmovies" element={<MostPopularMovies />} />
          <Route path="mostpopulartvshows" element={<MostPopularTvShows />} />
          <Route path="topboxoffice" element={<TopBoxOffice />} />
          <Route path="action" element={<TopActionMovies />} />
          <Route path="top10movies" element={<Top10MoviesPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
