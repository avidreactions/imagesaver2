import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  ImageList,
  ImageListItem,
  Snackbar,
  FormControl,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const AlertMessage = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = () => {
  const [urlInput, setUrlInput] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");

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
        setSeverity("success");
        setOpen(true);
      })
      .catch((error) => {
        setSeverity("error");
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
      <FormControl
        sx={{
          margin: "1em auto",
          textAlign: "center",
          left: "50%",
          transform: "translate(-50%)",
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
            margin: "1em",
          }}
        >
          Grab Images
        </Button>
      </FormControl>
      <ImageList
        sx={{ width: "50%", height: 700, margin: "0 auto" }}
        cols={imageUrls.length > 0 ? 3 : 1}
        rowHeight={164}
      >
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
          <Box sx={{ textAlign: "center", margin: " 0 auto" }}>
            <h1>Sorry, couldn't find anything</h1>
          </Box>
        )}
      </ImageList>
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

export default Form;
