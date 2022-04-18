import React, { useState } from "react";
import { Box, Snackbar, Grid, Modal, Fade } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import SearchBar from "./SearchBar";
import "../styling/gallery.css";

const AlertMessage = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [severity, setSeverity] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const handleOpenModal = (event) => {
    setCurrentImage(event.target.src);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <SearchBar
        setImageUrls={setImageUrls}
        setSeverity={setSeverity}
        setOpenSnackBar={setOpenSnackBar}
      />
      <Grid
        className="gallery-container"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {imageUrls.length > 0 ? (
          imageUrls.map((image) => (
            <Grid item xs={4}>
              <img
                className="image-tiles margin-auto"
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                alt="images"
                loading="lazy"
                onClick={handleOpenModal}
              />
            </Grid>
          ))
        ) : (
          <Box className="margin-auto">
            <h1>No Images</h1>
          </Box>
        )}
      </Grid>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <AlertMessage
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {severity === "success" ? "Success!" : "There was an error :("}
        </AlertMessage>
      </Snackbar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
      >
        <Fade in={openModal}>
          <Box className="modal-container">
            <img src={currentImage} alt={currentImage} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Gallery;
