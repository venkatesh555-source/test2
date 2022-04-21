import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import SearchBarInput from "./search";
import axios from "axios";

export default function SearchBar() {
  const [location, setLocation] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [facility, setFacility] = React.useState("");
  const [searchInput, setSearchInput] = React.useState("");
  const selectLocation = (event) => {
    setLocation(event.target.value);
  };
  const selectPricePerPerson = (event) => {
    setPrice(event.target.value);
  };
  const selectRating = (event) => {
    setRating(event.target.value);
  };
  const selectFacility = (event) => {
    setFacility(event.target.value);
  };
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const searchItems = (event) => {
    event.preventDefault();
    console.log(searchInput);
    axios
      .post("https://www.virginholidays.co.uk/cjs-search-api/search", {
        location,
        rating,
        price,
        facility,
        searchInput,
      })
      .then((res) => {
        console.log("RES", res);
      });
  };

  return (
    <Paper sx={{ width: "100%", minHeight: "70vh" }} elevation={3}>
      <Typography
        variant='h6'
        sx={{ marginTop: "auto" }}
        gutterBottom
        component='div'
      >
        Search
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: "auto" }}>
        <Grid item xs={12} sm={6} md={2}></Grid>
        <Grid container item xs={12} sm={6} md={8} spacing={2}>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel id='location'>Location</InputLabel>{" "}
              <Select
                labelId='location'
                id='hotel-location'
                value={location}
                label='Select Location'
                onChange={selectLocation}
              >
                <MenuItem value='new-york'>New-York</MenuItem>
                <MenuItem value='orlando'>Orlando</MenuItem>
                <MenuItem value='barbados'>Barbados</MenuItem>
                <MenuItem value='toronto'>Toronto</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel id='location'>Price per Person</InputLabel>{" "}
              <Select
                labelId='location'
                id='hotel-location'
                value={price}
                label='Price per Person'
                onChange={selectPricePerPerson}
              >
                <MenuItem value='new-york'>New-York</MenuItem>
                <MenuItem value='orlando'>Orlando</MenuItem>
                <MenuItem value='barbados'>Barbados</MenuItem>
                <MenuItem value='toronto'>Toronto</MenuItem>
              </Select>
            </FormControl>
          </Grid>{" "}
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel id='location'>Hotel Facilities</InputLabel>{" "}
              <Select
                labelId='location'
                id='hotel-location'
                value={facility}
                label='Hotel Facilities'
                onChange={selectFacility}
              >
                <MenuItem value='new-york'>New-York</MenuItem>
                <MenuItem value='orlando'>Orlando</MenuItem>
                <MenuItem value='barbados'>Barbados</MenuItem>
                <MenuItem value='toronto'>Toronto</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel id='location'>Hotel rating</InputLabel>{" "}
              <Select
                labelId='location'
                id='hotel-location'
                value={rating}
                label='Hotel Rating'
                onChange={selectRating}
              >
                <MenuItem value={5}>
                  <Rating readOnly value={5} />
                </MenuItem>
                <MenuItem value={4}>
                  {" "}
                  <Rating readOnly value={4} />
                </MenuItem>
                <MenuItem value={3}>
                  {" "}
                  <Rating readOnly value={3} />
                </MenuItem>
                <MenuItem value={2}>
                  {" "}
                  <Rating readOnly value={2} />
                </MenuItem>
                <MenuItem value={1}>
                  {" "}
                  <Rating readOnly value={1} />
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={2}></Grid>
      </Grid>
      <Grid container spacing={3} sx={{ marginTop: "auto" }}>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <Box>
            {" "}
            <SearchBarInput
              value={searchInput}
              onChange={handleSearchInput}
              onClick={searchItems}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </Paper>
  );
}
