import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image  from 'next/image';

const brand_images = [
  '/assets/img/brand/npf.png',
  '/assets/img/brand/brand-1.png',
  '/assets/img/brand/brand-2.png',
  '/assets/img/brand/brand-4.png',
  '/assets/img/brand/brand-16.png',
  '/assets/img/brand/sapoa.png',
  '/assets/img/brand/brand20.png',
  '/assets/img/brand/brand21.png',
  '/assets/img/brand/image.svg',
]

const Index = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), [])
  return (
    <Swiper
      loop={sliderLoop}
      spaceBetween={40}
      slidesPerView={2}
      modules={[Autoplay]}
      autoplay={
        { delay: 2500, disableOnInteraction: true, }
      }
      className="swiper-wrapper d-flex align-items-center mb-50"
      breakpoints={{
        // when window width is >= 1200px
        1200: {
          slidesPerView: 6,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 5,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 3,
        }
      }}
    >
      {brand_images.map((brand, i) => (
        <SwiperSlide key={i}>
          <div className="tp-brand-icon text-center m-3">
            <Image 
              src={brand}
              height={180}
              width={180}
              alt='brand'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Index;