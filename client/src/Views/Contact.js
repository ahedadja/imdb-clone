import React from "react";
import { Container } from "@mui/material";
import ContactForm from "../Components/ContactForm";
import { Box } from "@mui/material";

function Contact() {
  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="75vh">
        <ContactForm />
      </Box>
    </Container>
  );
}

export default Contact;
