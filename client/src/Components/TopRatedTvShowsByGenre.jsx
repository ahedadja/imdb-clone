import React from "react"
import { Box } from "@mui/material"
import { List, ListItemText, Link } from "@mui/material"
import Typography from "@mui/material/Typography"

function TopRatedTvShowsByGenre() {
  return (
    <Box>
      <Typography variant="h6">Top Rated TV Shows by Genre</Typography>
      <List>
        <Link href="#" color="inherit" underline="hover">
          <ListItemText>Action</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover">
          <ListItemText>Adventure</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover">
          <ListItemText>Animation</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Biography</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover">
          <ListItemText>Comedy</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover">
          <ListItemText>Crime</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Drama</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Family</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Fantasy</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Film-Noir</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>History</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Horror</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Music</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Musical</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Mystery</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Romance</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Sci-Fi</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Sport</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Thriller</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>War</ListItemText>
        </Link>
        <Link href="#" color="inherit" underline="hover" variant="body1">
          <ListItemText>Western</ListItemText>
        </Link>
      </List>
    </Box>
  )
}

export default TopRatedTvShowsByGenre
