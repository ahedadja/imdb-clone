import React from "react";
import { Box } from "@mui/material";
import { List, ListItemText, Link } from "@mui/material";
import Typography from "@mui/material/Typography";

function TopRatedMoviesByGenre() {
  return (
    <Box>
      <Typography variant="h6">Top Rated Movies by Genre</Typography>
      <List>
        <Link href="/action" color="inherit" underline="hover">
          <ListItemText>Action</ListItemText>
        </Link>
        <Link href="/adventure" color="inherit" underline="hover">
          <ListItemText>Adventure</ListItemText>
        </Link>
        <Link href="/animation" color="inherit" underline="hover">
          <ListItemText>Animation</ListItemText>
        </Link>
        <Link href="/biography" color="inherit" underline="hover" variant="body1">
          <ListItemText>Biography</ListItemText>
        </Link>
        <Link href="/comedy" color="inherit" underline="hover">
          <ListItemText>Comedy</ListItemText>
        </Link>
        <Link href="/crime" color="inherit" underline="hover">
          <ListItemText>Crime</ListItemText>
        </Link>
        <Link href="/drama" color="inherit" underline="hover" variant="body1">
          <ListItemText>Drama</ListItemText>
        </Link>
        <Link href="/family" color="inherit" underline="hover" variant="body1">
          <ListItemText>Family</ListItemText>
        </Link>
        <Link href="/fantasy" color="inherit" underline="hover" variant="body1">
          <ListItemText>Fantasy</ListItemText>
        </Link>
        <Link href="/film-noir" color="inherit" underline="hover" variant="body1">
          <ListItemText>Film-Noir</ListItemText>
        </Link>
        <Link href="/history" color="inherit" underline="hover" variant="body1">
          <ListItemText>History</ListItemText>
        </Link>
        <Link href="/horror" color="inherit" underline="hover" variant="body1">
          <ListItemText>Horror</ListItemText>
        </Link>
        <Link href="/music" color="inherit" underline="hover" variant="body1">
          <ListItemText>Music</ListItemText>
        </Link>
        <Link href="/musical" color="inherit" underline="hover" variant="body1">
          <ListItemText>Musical</ListItemText>
        </Link>
        <Link href="/mystery" color="inherit" underline="hover" variant="body1">
          <ListItemText>Mystery</ListItemText>
        </Link>
        <Link href="/romance" color="inherit" underline="hover" variant="body1">
          <ListItemText>Romance</ListItemText>
        </Link>
        <Link href="/sci-fi" color="inherit" underline="hover" variant="body1">
          <ListItemText>Sci-Fi</ListItemText>
        </Link>
        <Link href="/sport" color="inherit" underline="hover" variant="body1">
          <ListItemText>Sport</ListItemText>
        </Link>
        <Link href="/thriller" color="inherit" underline="hover" variant="body1">
          <ListItemText>Thriller</ListItemText>
        </Link>
        <Link href="/war" color="inherit" underline="hover" variant="body1">
          <ListItemText>War</ListItemText>
        </Link>
        <Link href="/western" color="inherit" underline="hover" variant="body1">
          <ListItemText>Western</ListItemText>
        </Link>
      </List>
    </Box>
  );
}

export default TopRatedMoviesByGenre;
