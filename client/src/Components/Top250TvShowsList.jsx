import React, { useState } from "react"
import Paper from "@mui/material/Paper"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import { styled } from "@mui/material/styles"
import { IconButton, TextField, useMediaQuery } from "@mui/material"
import MenuItem from "@mui/material/MenuItem"
import axios from "axios"
import useSWR from "swr"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { useMemo } from "react"
import Link from "@mui/material/Link"
import StarIcon from "@mui/icons-material/Star"
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined"
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined"
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined"
import Tooltip from "@mui/material/Tooltip"
import Fade from "@mui/material/Fade"
import ImdbCharts from "./ImdbCharts"
import TopRatedTvShowsByGenre from "./TopRatedTvShowsByGenre"

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: 0,
}))

const Top250TvShows = (props) => (
  <TableRow>
    <TableCell>
      <Link href="/">
        <img src={props.showList.image} alt={props.showList.title} width="45" height="67" />
      </Link>
    </TableCell>
    <TableCell align="left">
      {props.showList.rank}.{" "}
      <Link href="/" color="inherit" underline="hover">
        {props.showList.title}
      </Link>{" "}
      ({props.showList.year})
    </TableCell>
    <TableCell align="left">
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <StarIcon style={{ color: "gold" }} /> {props.showList.imDbRating}
      </Box>
    </TableCell>
    <TableCell align="left">
      <IconButton>
        <BookmarkAddOutlinedIcon />
      </IconButton>
    </TableCell>
  </TableRow>
)

function Top250TvShowsList() {
  const [sortField, setSortField] = React.useState("rk")
  const [sortDirection, setSortDirection] = useState("ASC")

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"))

  const url = "http://localhost:8000/top250tvshows"

  const getTop250TvShows = (url) => axios.get(url).then((res) => res.data)

  const { data, error } = useSWR(url, getTop250TvShows)

  const listOfShows = useMemo(() => {
    if (!data) {
      return undefined
    }

    //Can use [...data.items] or data.items.slice()
    const sorted = data.items.slice()
    if (sortField === "rk") {
      sorted.sort((a, b) => a.rank - b.rank)
    } else if (sortField === "ir") {
      sorted.sort((a, b) => b.imDbRating - a.imDbRating)
    } else if (sortField === "nor") {
      sorted.sort((a, b) => b.imDbRatingCount - a.imDbRatingCount)
    } else if (sortField === "rd") {
      sorted.sort((a, b) => a.year.localeCompare(b.year))
    }

    if (sortDirection === "DESC") {
      sorted.reverse()
    }

    return sorted.map((show) => {
      return <Top250TvShows key={show.id} showList={show} />
    })
  }, [data, sortField, sortDirection])

  if (error) return <div>Failed to load</div>

  return (
    <Box>
      {isMobile ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid xs={12} sx={{ display: "flex", flexDirection: "column", minWidth: 0, minHeight: 0 }}>
              <Item>
                <Typography variant="h6" gutterBottom>
                  IMDb Charts
                </Typography>
                <Typography variant="h5" gutterBottom>
                  IMDb Top 250 TV Shows
                </Typography>
              </Item>
              <Divider variant="middle" />
              <Item sx={{ height: "100%" }}>
                <Item color="inherit" sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    Showing 250 Titles
                  </Typography>
                  <TextField
                    value={sortField}
                    onChange={(e) => {
                      setSortField(e.target.value)
                    }}
                    select
                    label="Sort by:"
                    sx={{ m: 1, minWidth: 120 }}
                    size="small"
                  >
                    <MenuItem value="rk">Ranking</MenuItem>
                    <MenuItem value="ir">IMDb Rating</MenuItem>
                    <MenuItem value="rd">Release Date</MenuItem>
                    <MenuItem value="nor">Number of Ratings</MenuItem>
                  </TextField>
                  <Tooltip
                    title={sortDirection === "ASC" ? "Ascending order" : "Descending order"}
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <IconButton
                      onClick={() => {
                        setSortDirection((old) => {
                          return old === "ASC" ? "DESC" : "ASC"
                        })
                      }}
                    >
                      {sortDirection === "ASC" ? <ArrowUpwardOutlinedIcon /> : <ArrowDownwardOutlinedIcon />}
                    </IconButton>
                  </Tooltip>
                </Item>
                <Box sx={{ border: 1 }}>
                  <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">Rank&nbsp;&&nbsp;Title</TableCell>
                          <TableCell align="left">IMDb&nbsp;Rating</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>{listOfShows}</TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.5}>
              <Grid xs={8} sx={{ display: "flex", flexDirection: "column" }}>
                <Item>
                  <Typography variant="h6" gutterBottom>
                    IMDb Charts
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    IMDb Top 250 TV Shows
                  </Typography>
                </Item>
                <Divider variant="middle" />
                <Item sx={{ height: "100%" }}>
                  <Item color="inherit" sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                      Showing 250 Titles
                    </Typography>
                    <TextField
                      value={sortField}
                      onChange={(e) => {
                        setSortField(e.target.value)
                      }}
                      select
                      label="Sort by:"
                      sx={{ m: 1, minWidth: 120 }}
                      size="small"
                    >
                      <MenuItem value="rk">Ranking</MenuItem>
                      <MenuItem value="ir">IMDb Rating</MenuItem>
                      <MenuItem value="rd">Release Date</MenuItem>
                      <MenuItem value="nor">Number of Ratings</MenuItem>
                    </TextField>
                    <Tooltip
                      title={sortDirection === "ASC" ? "Ascending order" : "Descending order"}
                      TransitionComponent={Fade}
                      TransitionProps={{ timeout: 600 }}
                    >
                      <IconButton
                        onClick={() => {
                          setSortDirection((old) => {
                            return old === "ASC" ? "DESC" : "ASC"
                          })
                        }}
                      >
                        {sortDirection === "ASC" ? <ArrowUpwardOutlinedIcon /> : <ArrowDownwardOutlinedIcon />}
                      </IconButton>
                    </Tooltip>
                  </Item>
                  <Box sx={{ border: 1 }}>
                    <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left">Rank&nbsp;&&nbsp;Title</TableCell>
                            <TableCell align="left">IMDb&nbsp;Rating</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>{listOfShows}</TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Item>
              </Grid>
              <Grid xs={4} sx={{ display: "flex", flexDirection: "column" }}>
                <Item>
                  <ImdbCharts />
                </Item>
                <Divider variant="middle" />
                <Item sx={{ height: "100%" }}>
                  <TopRatedTvShowsByGenre />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </Box>
  )
}

export default Top250TvShowsList
