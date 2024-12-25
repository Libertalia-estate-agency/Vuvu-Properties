import Link from 'next/link';
import React from 'react';
import SocialLinks from '../social-links';
import { FaHome } from 'react-icons/fa';

const footer_contents = {
  shapes: ['footer/testimonial-shape-5.4.png', 'footer/team-shape-5.3.png'],
  title: 'Stay Connected with Us',
  sm_text: 'Discover a seamless real estate experience with Vuvu Properties. Proudly 100% black female-owned, we’re here to help you with all your property needs in Johannesburg and beyond.',
  btn_text: "Contact Us",
  copy_right: <>© {new Date().getFullYear()} Vuvu Properties , All Right Receved. </>,
  logo: '/assets/img/copyright/copyright-logo.png',
}
const { shapes, title, sm_text, btn_text, copy_right, logo } = footer_contents;

const FooterFive = () => {
  return (
    <footer className="p-relative">
      <div className="tp-footer-area pt-120 p-relative p-relative">
        {shapes.map((s, i) => (
          <div key={i} className={`bs-footer-shape-${i + 1} d-none d-lg-block`}>
            <img src={`/assets/img/${s}`} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="row">
            <div className="col-xl-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="footer-widget-info text-center">
                <h2 className="tp-footer-title pb-15">{title}</h2>
                <p>{sm_text}</p>
                <a className="tp-btn-sky mb-50" href="#">{btn_text}</a>
                <p className="right-receved">{copy_right}</p>
              </div>
            </div>
          </div>
          <div className="tp-copyright-bottom pb-90 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="tp-copyright-logo-box mb-30">
                  <div className="tp-copyright-logo text-center text-lg-start">
                    <Link href="/">
                      <div className="logo-container d-flex align-items-center">
                          <FaHome className="home-icon"
                            style={{ width: '60px', height: '60px', color:'amber' }}
                          />
                          <span className="company-name" style={{ color:'amber'}}>Vuvu Properties</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="tp-cpoyright-menu text-md-start text-center text-lg-center mb-30">
                  <a href="#">Case Studies</a>
                  <a href="#">Pricing Plan</a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="tp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;