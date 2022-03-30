import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Flip.css';


import { EffectFlip, Pagination, Navigation } from "swiper";


const Flip = () => {
    const {flip} = useParams()
    return (
        <div>
            <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg"alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=''/>
        </SwiperSlide>
      </Swiper>
    </>
        </div>
    );
};

export default Flip;