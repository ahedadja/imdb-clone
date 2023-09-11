const PORT = 8000
const express = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()

const app = express()

app.use(cors())

app.get("/top250movies", (req, res) => {
  const options = {
    method: "GET",
    url: `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_IMDB_API_KEY}`,
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get("/mostpopularmovies", (req, res) => {
  const options = {
    method: "GET",
    url: `https://imdb-api.com/en/API/MostPopularMovies/${process.env.REACT_APP_IMDB_API_KEY}`,
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get("/topboxoffice", (req, res) => {
  const options = {
    method: "GET",
    url: `https://imdb-api.com/en/API/BoxOffice/${process.env.REACT_APP_IMDB_API_KEY}`,
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get("/top250tvshows", (req, res) => {
  const options = {
    method: "GET",
    url: `https://imdb-api.com/en/API/Top250TVs/${process.env.REACT_APP_IMDB_API_KEY}`,
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get("/mostpopulartvshows", (req, res) => {
  const options = {
    method: "GET",
    url: `https://imdb-api.com/en/API/MostPopularTVs/${process.env.REACT_APP_IMDB_API_KEY}`,
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get("/action", (req, res) => {
  const options = {
    method: "GET",
    url: `https://imdb-api.com/API/AdvancedSearch/${process.env.REACT_APP_IMDB_API_KEY}?title_type=feature&genres=action&count=250`,
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get("/top10movies", (req, res) => {
  const options = {
    method: "GET",
    url: `https://dummyapi.online/api/movies`,
  }

  axios
    .request(options)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
