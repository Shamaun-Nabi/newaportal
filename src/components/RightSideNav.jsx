import React, { useContext } from "react";
import FindUs from "./FindUs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import SwiperElement from "./SwiperElement";
import { Autoplay } from "swiper";
import { AuthContext } from "../contexts/AuthProviderContext";

export default function RightSideNav() {
  
  const partners = [
    {
      id: 1,
      name: "10 Minutes School",
      bgLink: "https://thefinancialexpress.com.bd/uploads/1618824591.jpg",
    },
    {
      id: 2,
      name: "Robi Axiata Limited",
      bgLink:
        "https://markedium.com/wp-content/uploads/2021/04/Untitled-design5.png",
    },
    {
      id: 3,
      name: "Grameen Phone Limited",
      bgLink:
        "https://mobilenewsbd.com/wp-content/uploads/2019/03/Grameenphone-3G-to-4G-5GB-Data-Free-.jpg",
    },
  ];
  return (
    <div className="  h-screen p-4 ">
      {/* Find us */}
      <FindUs />
      {/* Find us */}
      {/* Slider */}
      <Swiper
        autoplay={true}
        spaceBetween={1}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <SwiperElement partner={partner} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Slider */}
    </div>
  );
}
