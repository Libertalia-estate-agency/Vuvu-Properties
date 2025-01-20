import Link from 'next/link';
import React from 'react';

import Image from 'next/image';

const hero_contents = {
  title: 'Where ownership meets excellence',
  text: <>Vuvu Properties is a 100% Black female-owned real estate agency based in Johannesburg, dedicated to delivering exceptional property transaction services tailored to meet the unique needs of every client.</>,
  btn_text: 'View Services',
  btn_text_2: 'About Vuvu Properties',
  social_links: [
    { id: 1, icon: 'fab fa-facebook-f social-icon-1', title: 'Facebook',link: 'http://facebook.com' },
    { id: 2, icon: 'fab fa-whatsapp social-icon-2', title: 'Whatsapp',link: 'http://whatsapp.com' },
    { id: 3, icon: 'fab fa-tiktok social-icon-3', title: 'TikTok',link: 'https://www.tiktok.com/' },
    { id: 4, icon: 'fab fa-linkedin social-icon-2', title: 'Linked In',link: 'http://linkedin.com' },
    
  ],
  hero_img: '/assets/img/hero/hero1.jpg',
}

const { title, text, btn_text, btn_text_2, social_links, hero_img } = hero_contents;

const HeroArea = () => {
  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
        <div className="shape-circle-yellow d-none"></div>
        <div className="shape-circle-blue"></div>
        <div className="shape-one"><img src="/assets/img/hero/shape-1.png" alt="" /></div>
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <h2 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                    {title}
                  </h2>
                  <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">{text}</p>
                  <div className="tp-hero-button mb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                    <Link href="/">
                      <a className="tp-btn mr-30" style={{ color: 'black', backgroundColor: 'burlywood'}}>{btn_text}</a>
                    </Link>
                    <Link href="/">
                      <a className="tp-btn-grey" style={{ color: 'black', backgroundColor: 'burlywood'}}>{btn_text_2}
                        <i className="far fa-arrow-right"></i></a>
                    </Link>
                  </div>
                  <div className="tp-hero-social pb-30 wow tpfadeIn" data-wow-duration=".7s" data-wow-delay="1.2s">
                    <div className="tp-hero-social bp-hero-social">
                      {social_links.map((l, i) => (
                        <a key={i} className={`social-icon-${l.id}`} href={l.link} target="_blank" rel="noreferrer">
                          <i className={l.icon}></i><span>{l.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="image-container wow fadeInRight" data-wow-duration=".7s" data-wow-delay="1.2s">
                  <Image 
                    src={hero_img} 
                    alt="Hero Image" 
                    layout="intrinsic" 
                    width={550} 
                    height={450} 
                    className="rounded-image"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;