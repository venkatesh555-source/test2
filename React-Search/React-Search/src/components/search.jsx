import { SearchRounded } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";

export default function SearchBarInput({ value, onClick, onChange }) {
  return (
    <FormControl fullWidth>
      {" "}
      <InputLabel htmlFor='search-hotel'>Search Hotels</InputLabel>{" "}
      <OutlinedInput
        id='search-hotel'
        label='Search Hotels'
        fullWidth
        variant='outlined'
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton edge='end' aria-label='search' onClick={onClick}>
              <SearchRounded />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
