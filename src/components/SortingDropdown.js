import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SortingDropdown() {
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Sort By</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sortBy}
        label="Sort By"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Name</MenuItem>
        <MenuItem value={20}>Price</MenuItem>
        <MenuItem value={30}>Rating</MenuItem>
      </Select>
    </FormControl>
  );
}
