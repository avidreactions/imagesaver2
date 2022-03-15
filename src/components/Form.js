import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const Form = () => {
  const [textInput, setTextInput] = useState("");

  const handleClick = () => {
    const postObj = { url: textInput };
    console.log("hey there I have been clicked, will send: ", postObj);
    fetch("http://127.0.0.1:5000/imagesaver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    });
  };
  const handleOnChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
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
      <Button onClick={handleClick}>Grab Images</Button>
    </Box>
  );
};

export default Form;
