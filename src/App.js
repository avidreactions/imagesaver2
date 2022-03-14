import React from "react";
import { Box, TextField, Button } from "@mui/material";

function App() {
  return (
    <Box
      component="form"
      sx={{
        margin: "3em auto",
        textAlign: "center",
      }}
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <br />
      <Button>Click me</Button>
    </Box>
  );
}

export default App;
