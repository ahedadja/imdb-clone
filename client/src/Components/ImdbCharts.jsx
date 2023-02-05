import React from "react";
import Link from "@mui/material/Link";
import { List, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ImdbCharts() {
  return (
    <Box>
      <Typography variant="h6">IMDb Charts</Typography>
      <List>
        <Link href="/topboxoffice" color="inherit" underline="hover">
          <ListItemText>Box Office</ListItemText>
        </Link>
        <Link href="/mostpopularmovies" color="inherit" underline="hover">
          <ListItemText>Most Popular Movies</ListItemText>
        </Link>
        <Link href="/top250movies" color="inherit" underline="hover">
          <ListItemText>Top 250 Movies</ListItemText>
        </Link>
        <Link href="/mostpopulartvshows" color="inherit" underline="hover">
          <ListItemText>Most Popular TV Shows</ListItemText>
        </Link>
        <Link href="/top250tvshows" color="inherit" underline="hover">
          <ListItemText>Top 250 TV Shows</ListItemText>
        </Link>
      </List>
    </Box>
  );
}

export default ImdbCharts;
