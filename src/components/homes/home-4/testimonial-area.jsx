import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from 'next/link';

const testimonial_contents = {
  subtitle: 'Testimonials',
  title: 'What Our ',
  highlight_text: ' Clients Had To Say',
  btn_text: 'More Testimonial',
  testimonial_data: [
    {
      id: 1,
      brand_img: '/assets/img/testimonial/testi-brands-1.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'Vuvu Properties provided exceptional service! Their team guided me through the entire property buying process seamlessly. Highly recommended for anyone looking for professional real estate assistance.',
      img: '/assets/img/testimonial/testi-3.png',
      name: 'Sibongile Dlamini',
      title: 'Real Estate Investor (Vuvu Properties)'
    },
    {
      id: 2,
      brand_img: '/assets/img/testimonial/testi-brands-2.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'Sayipa’s expertise in the business sector has been invaluable. Their guidance helped us secure key partnerships and grow our reach significantly.',
      img: '/assets/img/testimonial/testi-3.png',
      name: 'Mandla Khumalo',
      title: 'CEO (Sayipa)'
    },
    {
      id: 3,
      brand_img: '/assets/img/testimonial/testi-brands-3.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'Libertalia Properties goes above and beyond for their clients. Their in-depth knowledge of the real estate market helped us find the perfect commercial space in Johannesburg.',
      img: '/assets/img/testimonial/testi-3.png',
      name: 'Thando Mthembu',
      title: 'Managing Director (Libertalia Properties)'
    },
    {
      id: 4,
      brand_img: '/assets/img/testimonial/testi-brands-4.png',
      ratings: [1, 2, 3, 4, 5],
      desc: 'Tesile Solutions transformed our hiring process. Their Global Recruitment Portal is an absolute game-changer for connecting top talent with the right opportunities.',
      img: '/assets/img/testimonial/testi-3.png',
      name: 'Nomzamo Zulu',
      title: 'HR Manager (Tesile Solutions)'
    }
  ]
  
}

const { btn_text, highlight_text, subtitle, testimonial_data, title } = testimonial_contents;

const TestimonialArea = ({ home_6, style_2 = false }) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  return (
    <div className={`tp-testimonial-area ${style_2 ? 'pb-130' : 'pt-130 pb-130'} p-relative`}>
      <div className={`${home_6 ? 'bs-testi-shape-1' : 'ce-testi-shape'} d-none d-lg-block`}>
        <img src={home_6 ? "/assets/img/testimonial/testimonial-shape-5.3.png" : "/assets/img/hero/hero-shape-4.png"} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-testi-wrapper d-flex pb-70 justify-content-between align-items-end">
              <div className="tp-testimonial-title-box ">
                <h5 className="tp-subtitle">{subtitle}</h5>
                <h2 className="tp-title-sm">{title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg width="212" height="11" viewBox="0 0 212 11" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L212 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
              
            </div>
          </div>
        </div>
        <div className="tp-testimonial-slider-section-four">
          <Swiper
            loop={sliderLoop}
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            centeredSlidesBounds={true}
            className="swiper-container testi-slider-active-five"
            breakpoints={{
              '1200': {
                slidesPerView: 3,
              },
              '992': {
                slidesPerView: 3,
              },
              '768': {
                slidesPerView: 1,
              },
              '576': {
                slidesPerView: 1,
              },
              '0': {
                slidesPerView: 1,
              },
            }}
          >
            {testimonial_data.map((item) => {
              const { id, brand_img, desc, img, name, ratings, title } = item;
              return <SwiperSlide key={id}>
                <div className="tp-testimonial-item-four">
                  <div
                    className="tp-testimonial-item-four__meta d-flex justify-content-between 
                    align-items-center mb-60">
                    <div className="tp-testimonial-item-four__logo">
                      <a href="#"><img src={brand_img} alt="" /></a>
                    </div>
                    <div className="tp-testimonial-item-four__rating">
                      {ratings.map((r) => <span key={r}>
                        <i className="fas fa-star"></i></span>)}
                    </div>
                  </div>
                  <div className="tp-testi-paragraph pb-40">
                    <p>{desc}</p>
                  </div>
                  <div className="tp-testimonial-item-four__client d-flex align-items-center">
                    <div className="mr-20">
                      <img src={img} alt="" />
                    </div>
                    <div className="tp-testimonial-item-four__position">
                      <h4 className="m-0">{name}</h4>
                      <span>{title}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;