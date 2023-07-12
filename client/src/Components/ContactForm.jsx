import React from "react"
import { Card, CardContent, TextField, Button, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Container } from "@mui/material"

function ContactForm() {
  return (
    <Container>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "30px 10px", borderRadius: 0 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography gutterBottom color="textSecondary" variant="body2" component="p">
            Fill out the form and we will do our best to get back to you as soon as possible.
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button type="submit" variant="contained" fullWidth sx={{ color: "black", backgroundColor: "#FFFFFF" }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  )
}

export default ContactForm
