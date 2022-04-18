import React, { useState } from "react";
import { Box, Snackbar, Grid } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import SearchBar from "./SearchBar";

const AlertMessage = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <SearchBar
        setImageUrls={setImageUrls}
        setSeverity={setSeverity}
        setOpen={setOpen}
      />
      <Grid container direction="row">
        {imageUrls.length > 0 ? (
          imageUrls.map((image) => (
            <Grid item>
              <img
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                alt="images"
                loading="lazy"
              />
            </Grid>
          ))
        ) : (
          <Box sx={{ textAlign: "center", margin: " 0 auto" }}>
            <h1>No Images</h1>
          </Box>
        )}
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <AlertMessage
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {severity === "success" ? "Success!" : "There was an error :("}
        </AlertMessage>
      </Snackbar>
    </>
  );
};

export default Gallery;
