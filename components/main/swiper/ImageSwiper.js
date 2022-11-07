import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Zoom } from "swiper";

const ImageSwiper = ({ images }) => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Pagination]}
        className="mySwiper"
      >
        {images?.map((image, index) => (
          <SwiperSlide className="slides" key={index}>
            <div className="swiper-zoom-container">
              <Image src={image} alt="image" className="swiper_image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageSwiper;
