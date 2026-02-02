import axios from "axios";
import { useEffect, useState } from "react";
import { FormGroup, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
const CatagoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(function () {
    async function getCatagory() {
      const response = await axios.get(
        "https://dummyjson.com/products/categories",
      );
      setCategories(response.data);
    }
    getCatagory();
  }, []);
  return (
    <div className=" flex flex-col">
      {categories.map((category) => (
        <div key={category.slug}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label={category.name} />
          </FormGroup>
        </div>
      ))}
    </div>
  );
};

export default CatagoryList;
