import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  ImageList,
  ImageListItem,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const AlertMessage = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = () => {
  const [urlInput, setUrlInput] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    const postObj = { url: urlInput };

    fetch("http://127.0.0.1:5000/imagesaver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    })
      .then((response) => response.json())
      .then((data) => {
        setImageUrls(data.data);
        setOpen(true);
      });
  };
  const handleOnChange = (event) => {
    event.preventDefault();
    setUrlInput(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          margin: "3em auto",
          textAlign: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          label="URL"
          name="url"
          variant="outlined"
          onChange={handleOnChange}
        />
        <br />
        <Button
          variant="outlined"
          onClick={handleClick}
          sx={{
            margin: "3em",
          }}
        >
          Grab Images
        </Button>
      </Box>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {imageUrls.length > 0 ? (
          imageUrls.map((image) => (
            <ImageListItem key={image}>
              <img
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                alt="images"
                loading="lazy"
              />
            </ImageListItem>
          ))
        ) : (
          <></>
        )}
      </ImageList>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <AlertMessage
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </AlertMessage>
      </Snackbar>
    </>
  );
};

export default Form;
