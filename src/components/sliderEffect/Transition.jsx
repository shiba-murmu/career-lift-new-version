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
          rotate: 0,
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
          <img src="/images/career.jpeg" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/low-angle-businesswoman-posing-with-arms-crossed-outdoors_23-2148767034.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/close-up-young-people-greeting-each-other-work-table_160672-19772.jpg?semt=ais_hybrid&w=740"  className="rounded-2xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/team-diversity-corporate-portrait-office-confidence-happy-proud-startup-woman-men-business-people-together-lobby-collaboration-partnership-support-teamwork_590464-371187.jpg?semt=ais_hybrid&w=740" 
          className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/male-female-business-people-working-tablet-office_1303-22827.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/leadership-success-concept_670147-41839.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/worker-with-career-word_1156-556.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/portrait-woman-working-startup-company_23-2149116501.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/employee-working-with-document_23-2151872284.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/businessman-walking-promotion_1156-559.jpg?semt=ais_hybrid&w=740" className="rounded-2xl"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/turning-back-group-young-people-walking-office-their-break-time_146671-16590.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/group-business-executives-smiling-camera_1170-1894.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/rag-doll-red-word-career_1156-191.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/businessman-drawing-keys-success_1134-645.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/rag-doll-walking-blue-word-success_1156-190.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/office-pride-businesswoman-portrait-career-startup-progress-happy-with-job-creative-agency-female-person-graphic-designer-with-positive-attitude-tasks-planning-laptop_590464-479453.jpg?semt=ais_hybrid&w=740" className="rounded-2xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/businessman-run-career-ladder-business-concept-isolated-contains-clipping-path_1401-1683.jpg?semt=ais_hybrid&w=740"  className="rounded-2xl" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
