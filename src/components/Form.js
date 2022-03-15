import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";

const Form = () => {
  const [urlInput, setUrlInput] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

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
      });
  };
  const handleOnChange = (event) => {
    event.preventDefault();
    setUrlInput(event.target.value);
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
    </>
  );
};

export default Form;
