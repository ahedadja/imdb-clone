import React from "react"
import Paper from "@mui/material/Paper"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import { styled } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"
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
import ImdbCharts from "./ImdbCharts"
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined"
import IconButton from "@mui/material/IconButton"
import CurrentWeekend from "./CurrentWeekend"

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: 0,
}))

const BoxOffice = (props) => (
  <TableRow>
    <TableCell>
      <Link href="/">
        <img src={props.movieList.image} alt={props.movieList.title} width="45" height="67" />
      </Link>
    </TableCell>
    <TableCell align="left">
      <Link href="/" color="inherit" underline="hover">
        {props.movieList.title}
      </Link>
    </TableCell>
    <TableCell align="left">{props.movieList.weekend}</TableCell>
    <TableCell align="left">{props.movieList.gross}</TableCell>
    <TableCell align="left">{props.movieList.weeks}</TableCell>
    <TableCell align="left">
      <IconButton>
        <BookmarkAddOutlinedIcon />
      </IconButton>
    </TableCell>
  </TableRow>
)

function TopBoxOfficeList() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"))

  const url = "http://localhost:8000/topboxoffice"

  const getBoxOffice = (url) => axios.get(url).then((res) => res.data)

  const { data, error } = useSWR(url, getBoxOffice)

  const listOfMovies = useMemo(() => {
    if (!data) {
      return undefined
    }
    return [...data.items].map((movie) => {
      return <BoxOffice key={movie.id} movieList={movie} />
    })
  }, [data])

  if (error) return <div>Failed to load</div>

  return (
    <Box>
      {isMobile ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid xs={12} sx={{ display: "flex", flexDirection: "column", minWidth: 0, minHeight: 0 }}>
              <Item>
                <Typography variant="h5">Top Box Office (US)</Typography>
                <CurrentWeekend />
              </Item>
              <Divider variant="middle" />
              <Item sx={{ height: "100%" }}>
                <Box sx={{ border: 1 }}>
                  <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell align="left">Title</TableCell>
                          <TableCell align="left">Weekend</TableCell>
                          <TableCell align="left">Gross</TableCell>
                          <TableCell align="left">Weeks</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>{listOfMovies}</TableBody>
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
                  <Typography variant="h5">Top Box Office (US)</Typography>
                  <CurrentWeekend />
                </Item>
                <Item sx={{ height: "100%" }}>
                  <Box sx={{ border: 1 }}>
                    <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Weekend</TableCell>
                            <TableCell align="left">Gross</TableCell>
                            <TableCell align="left">Weeks</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>{listOfMovies}</TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Item>
              </Grid>
              <Grid xs={4} sx={{ display: "flex", flexDirection: "column" }}>
                <Item>
                  <ImdbCharts />
                </Item>
                <Item sx={{ height: "100%" }}></Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </Box>
  )
}

export default TopBoxOfficeList
