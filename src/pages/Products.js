import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import SideFilter from "../components/SideFilter";
import CatagoryList from "../components/CatagoryList";
import RatingStar from "../components/RatingStar";
import PriceRange from "../components/PriceRange";
import SortingDropdown from "../components/SortingDropdown";
import SearchInput from "../components/SearchInput";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProductData() {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=30&skip=80",
      );
      setProducts(response.data.products);
    }
    getProductData();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="w-full flex flex-wrap justify-around my-5 p-3 gap-5">
        <div className="w-1/6 flex flex-col max-h-screen items-center gap-y-3 rounded-md overflow-auto">
          <h2 className="text-xl font-medium">Filter</h2>
          <div className="flex flex-col w-full gap-y-3">
            <SideFilter title="Caragory" bodyComponent={<CatagoryList />} />
            <SideFilter title="Rating" bodyComponent={<RatingStar />} />
            <SideFilter title="Range" bodyComponent={<PriceRange />} />
          </div>
        </div>
        <div className="w-3/4  overflow-auto">
          <div className="flex w-full px-4 justify-between items-baseline mb-5">
            <h2 className="text-xl text-center font-medium mb-3">
              All Products
            </h2>
            <SearchInput />
            <SortingDropdown />
          </div>
          <div className="flex gap-5 w-full justify-center flex-wrap  rounded-md ">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
