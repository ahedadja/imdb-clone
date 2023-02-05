import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import Link from "@mui/material/Link";

function Item(props) {
  return (
    <Paper>
      <Box sx={{ position: "relative", mw: "800px", margin: "0 auto" }}>
        <img src={props.item.image} alt={props.item.name} height="544px" width="100%"></img>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          color: "#ffffff",
          width: "100%",
          padding: "20px",
        }}
      >
        <p>{props.item.description}</p>
      </Box>
    </Paper>
  );
}

function ImageGallery() {
  let items = [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTM2MjI4MzU1NV5BMl5BanBnXkFtZTcwOTgzMTk2Mw@@._V1_Ratio2.3400_AL_.jpg",
      description: (
        <Link href="#" color="inherit" underline="hover">
          The Dark Knight
        </Link>
      ),
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTM0NjUxMDk5MF5BMl5BanBnXkFtZTcwNDMxNDY3Mw@@._V1_Ratio1.5000_AL_.jpg",
      description: "The Shawshank Redemption",
    },
  ];

  return (
    <Carousel navButtonsAlwaysVisible sx={{ height: "544px", width: "843px" }} autoPlay={false}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default ImageGallery;
