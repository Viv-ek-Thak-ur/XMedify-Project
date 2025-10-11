import React from "react";
import { Button } from "@mui/material";
import SearchIcon from  "@mui/icons-material/Search";

function SearchButton({onClick}){
    return(
        <Button
      variant="contained"
      startIcon={<SearchIcon />}
      sx={{ height: "40px" }}
      onClick={onClick}
    >
      Search
    </Button>
    )
}


export default SearchButton;