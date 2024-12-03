import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

const testimonial_data = [
  {
    id: 1,
    user: '/assets/img/testimonial/testi-1.png',
    name: 'Thando M.',
    title: 'Aspiring Property Practitioner',
    ratings: [1, 2, 3, 4, 5],
    desc: 'The Vuvu Properties Training Academy provided me with the knowledge and confidence to launch my career in real estate. Their hands-on approach and experienced mentors were invaluable.'
  },
  {
    id: 2,
    user: '/assets/img/testimonial/testi-2.jpg',
    name: 'Lerato K.',
    title: 'Satisfied Seller',
    ratings: [1, 2, 3, 4],
    desc: 'Selling my property through Vuvu Properties was seamless and stress-free. Their team was professional, knowledgeable, and dedicated to getting the best deal for me.'
  },
  {
    id: 3,
    user: '/assets/img/testimonial/testi-3.png',
    name: 'Sipho D.',
    title: 'Happy Tenant',
    ratings: [1, 2, 3, 4, 5],
    desc: 'I found the perfect rental home with Vuvu Properties! They truly listened to my needs and made the entire process smooth and enjoyable.'
  },
  {
    id: 4,
    user: '/assets/img/testimonial/testi-1.png',
    name: 'Naledi R.',
    title: 'Property Investor',
    ratings: [1, 2, 3, 4, 5],
    desc: 'The valuation services provided by Vuvu Properties were detailed and accurate, helping me make informed decisions about my property investments.'
  },
]

const testimonial_2_data = [
  {
    id: 1,
    user: '/assets/img/testimonial/testi-4.jpg',
    name: 'Kabelo S.',
    title: 'Loyal Client',
    ratings: [1, 2, 3, 4, 5],
    desc: "Vuvu Properties is truly a one-stop shop for all real estate needs. From renting my first apartment to learning about property investment through their academy, they’ve been with me every step of the way"
  },
  {
    id: 2,
    user: '/assets/img/testimonial/testi-5.jpg',
    name: 'Busi N.',
    title: 'Property Buyer',
    ratings: [1, 2, 3, 4],
    desc: "From my first property purchase to expanding my portfolio, Nomvula and Vuvu Properties have been invaluable partners. Their expertise and genuine care make all the difference"
  },
  {
    id: 3,
    user: '/assets/img/testimonial/testi-6.jpg',
    name: 'James S.',
    title: 'Aspiring Property Practitioner',
    ratings: [1, 2, 3, 4, 5],
    desc: "The training I received at Vuvu Properties Academy was transformative. Nomvula's mentorship and the practical sessions prepared me to excel in the real estate industry."
  },
  {
    id: 4,
    user: '/assets/img/testimonial/testi-5.jpg',
    name: 'Darrell Steward',
    title: 'Property Owner',
    ratings: [1, 2, 3, 4, 5],
    desc: "Nomvula and her team were exceptional in helping me sell my property. Their expertise and commitment made the entire process effortless and rewarding."
  },
]

const Testimonial = () => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  const [sliderLoopTwo, setSliderLoopTwo] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);
  React.useEffect(() => setSliderLoopTwo(true), []);
  return (
    <React.Fragment>
      <div className="tp-testimonial-area black-bg pt-130 pb-130 fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-section-box text-center pb-25">
                <h5 className="tp-subtitle">Client Testimonials</h5>
                <h2 className="tp-title tp-white-text">Customer feedback</h2>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-slider-section d-flex justify-content-center mb-50">
            {/* slider start */}
            <Swiper
              loop={sliderLoop}
              slidesPerView={1}
              centeredSlides={true}
              centeredSlidesBounds={true}
              spaceBetween={50}
              className="swiper-container testimonial-slider-active"
              breakpoints={{
                // when window width is >= 1200px
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {testimonial_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-testimonial-item">
                    <div className="tp-testi-meta d-flex justify-content-between mb-40">
                      <div className="tp-testi-icon-box d-flex align-items-center">
                        <div className="tp-testi-img mr-20"><img src={item.user} alt="" />
                        </div>
                        <div className="tp-testi-client-position">
                          <h3>{item.name}</h3>
                          <h6>{item.title}</h6>
                        </div>
                      </div>
                      <div className="tp-testi-ratting">
                        {item.ratings.map((r, i) => <i key={i} className="fas fa-star"></i>)}
                      </div>
                    </div>
                    <div className="tp-testi-p-text">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* slider end */}
          </div>

          {/* slider 2 start */}
          <div className="tp-testimonial-slider-section-2 d-flex justify-content-center">
            <Swiper
              loop={sliderLoopTwo}
              slidesPerView={1}
              spaceBetween={50}
              className="swiper-container testimonial-slider-active-2"
              breakpoints={{
                // when window width is >= 1200px
                1200: { slidesPerView: 4 },
                992: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                576: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
            >
              {testimonial_2_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-testimonial-item">
                    <div className="tp-testi-meta d-flex justify-content-between mb-40">
                      <div className="tp-testi-icon-box d-flex align-items-center">
                        <div className="tp-testi-img mr-20">
                          <img src={item.user} alt="" />
                        </div>
                        <div className="tp-testi-client-position">
                          <h3>{item.name}</h3>
                          <h6>{item.title}</h6>
                        </div>
                      </div>
                      <div className="tp-testi-ratting">
                        {item.ratings.map((r, i) => <i key={i} className="fas fa-star"></i>)}
                      </div>
                    </div>
                    <div className="tp-testi-p-text">
                      <p>{item.desc}</p>
                    </div>
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* slider 2 end */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;