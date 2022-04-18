import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";

const SearchBar = (props) => {
  const { setImageUrls, setSeverity, setOpenSnackBar } = props;

  const [urlInput, setUrlInput] = useState("");
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    const postObj = { url: urlInput };
    setLoading(true);
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
        setOpenSnackBar(true);
        setLoading(false);
      })
      .catch((error) => {
        setSeverity("error");
        setOpenSnackBar(true);
        setLoading(false);
      });
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setUrlInput(event.target.value);
  };

  return (
    <>
      <FormControl
        sx={{
          margin: "1em auto",
          textAlign: "center",
          left: "50%",
          transform: "translate(-50%)",
          width: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="URL"
              name="url"
              variant="outlined"
              onChange={handleOnChange}
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              onClick={handleClick}
              sx={{ height: "55px" }}
              disabled={loading}
            >
              {loading && (
                <CircularProgress
                  size={30}
                  sx={{
                    position: "absolute",
                    top: 12,
                    left: 38,
                    zIndex: 1,
                  }}
                />
              )}
              {loading ? "Loading" : "Grab Images"}
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </>
  );
};

export default SearchBar;
