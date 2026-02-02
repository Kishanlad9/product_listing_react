import React from "react";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <div className="relative">
      <Input placeholder="Search" className="pe-10" />
      <SearchIcon className="absolute right-2" />
    </div>
  );
};

export default SearchInput;
