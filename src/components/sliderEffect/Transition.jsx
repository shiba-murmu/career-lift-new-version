import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import './styles.css';
import "./Transition.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export default function Transition() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 30,
          depth: 1500,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/career.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://assets-us-01.kc-usercontent.com/b1495851-c47d-0087-29c8-65e1780b1b3b/c9009e76-a432-4ba1-a560-f22f8bf65e06/AI%20Square.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjUP3Gm7i2kGup1sxiZrS9iqiD7rXVyhLA4g&s" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.istockphoto.com/id/1371879631/vector/business-journey-businessman-walking-on-long-winding-path-going-to-success-in-the-future.jpg?s=612x612&w=0&k=20&c=VtgGNFpLo8v5lWXW0rWqa21Fh_i5bvLvJ2gA4pCqpR0=" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNK35UOgK4nJXxPLvjGKLbzAGBG7PpcnEvgA&s" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuamCpOUG3NOO3hY9-RrBhNCmHJeU5l7tv9A&s" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://gitservices.com/wp-content/uploads/2023/12/DALL%C2%B7E-2023-12-28-00.18.16-An-individual-standing-at-a-crossroads-signpost-with-paths-leading-to-AI-Engineering-and-Other-Careers.-The-scene-captures-a-moment-of-career-dec-1024x585.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media.licdn.com/dms/image/v2/D5612AQEZYH2Nj4Yb6w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708069674848?e=2147483647&v=beta&t=0Z73Csrk6PwGMPeDRJ6KE5q7Am9S-Ybh-kwpnMctyZA" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/032/057/059/small/successful-businessman-raising-arms-like-a-winner-standing-on-roof-of-office-building-with-city-view-ai-generated-photo.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
