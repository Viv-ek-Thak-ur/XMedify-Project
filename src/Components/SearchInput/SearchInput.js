
import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from  "@mui/icons-material/Search";

export default function SearchInput({ placeholder }) {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      size="small"
      InputProps={{
        startAdornment:(
        <InputAdornment
        position="start"

        >
          <SearchIcon/>
        </InputAdornment>
        )
      }}
      sx={{
        bgcolor: "white",
        width: { xs: "100%", sm: "200px" },
      }}
    />
  );
}



