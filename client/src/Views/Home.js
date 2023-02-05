import * as React from "react";
import { Container, Typography, Box, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ImageGallery from "../Components/ImageGallery";

const Item = styled(Paper)(({ theme }) => ({
  background: "black",
  padding: theme.spacing(1),
  borderRadius: 0,
  textAlign: "left",
}));

function Home() {
  return (
    <Box sx={{ background: "black" }}>
      <Container>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2}>
            <Item>
              <Typography variant="h4" gutterBottom>
                Featured Today
              </Typography>
              <ImageGallery />
            </Item>
            <Item>
              <Typography variant="h4" gutterBottom>
                In Theatres
              </Typography>
            </Item>
            <Item>
              <Typography variant="h4" gutterBottom>
                Coming Soon
              </Typography>
            </Item>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
