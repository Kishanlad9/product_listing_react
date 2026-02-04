import React from "react";
import CubbicSlider from "../components/HomePage/CubbicSlider";
import shooesBanner from "./../assets/images/discount-sneakers-podium.jpg";
import headPhoneBanner from "./../assets/images/discount-headphones-podium.jpg";
import jacketBanner from "./../assets/images/discount-jacket-podium.jpg";
const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-between w-full gap-x-3 p-10">
        <div className="w-1/2 mb-5 p-3">
          <CubbicSlider />
        </div>
        <div className="flex w-full flex-col mt-3">
          <div className="w-full h-[400px] border-2 rounded-xl overflow-hidden ">
            <img
              src={jacketBanner}
              alt="/"
              className="object-fit w-full  object-cover"
            />
          </div>
          <div className="w-full h-h-[250px] mt-5 flex justify-between gap-x-3 ">
            <div className="w-1/2 border-2 rounded-xl overflow-hidden">
              <img src={shooesBanner} alt="/" />
            </div>
            <div className="w-1/2 border-2 rounded-xl overflow-hidden">
              <img src={headPhoneBanner} alt="/" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
