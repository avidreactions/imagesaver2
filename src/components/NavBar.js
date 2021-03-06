import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const NavBar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Image Saver
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
