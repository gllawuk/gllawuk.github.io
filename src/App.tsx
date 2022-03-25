import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="body1">GL Law Developer</Typography>
        <Router>
          <List>
            <ListItem disableGutters>
              <a
                href="https://github.com/gllawuk/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </ListItem>
          </List>
        </Router>
        <Typography variant="body1" sx={{ mb: 2 }}>
          © {new Date().getFullYear()}. GL Law is a trading name of Gregg
          Latchams Limited. All rights reserved. Gregg Latchams is a limited
          company registered in England & Wales (Company number 6899567) and is
          authorised and regulated by the Solicitors Regulation Authority (SRA
          number 607476). VAT number: 137 8482 39.
        </Typography>
        <Typography variant="body1">
          Email: <a href="mailto:developer@gl.law">developer@gl.law</a>
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
