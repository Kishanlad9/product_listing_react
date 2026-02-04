import Navbar from "../components/Navbar/Navbar";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function getCatagory() {
      let response = await axios.get(
        "https://dummyjson.com/products/category-list",
      );
      setCategory(response.data);
    }
    async function getSingleProductCatagory() {
      let response = await axios.get("https://dummyjson.com/products");
      console.log(response.data);
    }
    getCatagory();
    getSingleProductCatagory();
  }, []);
  return (
    <div>
      <Navbar />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {category.map((item, index) => (
          <SwiperSlide key={index} className="border-3">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
