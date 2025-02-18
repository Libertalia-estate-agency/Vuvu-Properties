import React from 'react';
import { Highlight } from '../../../svg';

import Image from 'next/image';


const hero_contents = {
  shapes: [
    { number: 'one', img: '/assets/img/hero/hero-light-1.png' },
    { number: 'two', img: '/assets/img/hero/hero-light-2.png' },
    { number: 'three z-index-1', img: '/assets/img/hero/Spiral.png' },
    { number: 'four z-index-1', img: '/assets/img/hero/hero-light-2.png' },
  ],
  title: 'Where Ownership Meets Excellence',
  highlightText: '',
  hero_img: '/assets/img/hero/hero6.jpg',
  brands: [
    { img: 'hero-icon-1', title: 'LinkedIn',link: 'https://dribbble.com/' },
    { img: 'hero-icon-2', title: 'Property24',link: 'https://www.behance.net/' },
    { img: 'hero-icon-3', title: 'Sayipa',link: 'http://facebook.com' },
    
  ]
}

const { brands, hero_img, highlightText, shapes, title } = hero_contents;

const HeroArea = () => {
  return (
    <div className="tp-hero-area-two">
      <div className="tp-hero-bg-circle p-relative">
        {shapes.map((s, i) => (
          <div key={i} className={`tp-hero-light-shape-${s.number}`}>
            <img src={s.img} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-hero-content-box text-center">
                <h3 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">{title} {' '}
                  <span className="tp-highlight"><Highlight/>
                    <i className="tp-theme-color">{highlightText}</i>
                  </span>
                </h3>
                  <div className="image-container wow fadeInRight" data-wow-duration=".7s" data-wow-delay="1.2s">
                                    <Image 
                                      src={hero_img} 
                                      alt="Hero Image" 
                                      layout="responsive"  
                                      width={550} 
                                      height={450} 
                                      className="rounded-image"
                                    />
                                </div>
                
                <div className="tp-hero-social-link wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                  {brands.map((b, i) => (
                    <a key={i} className="tp-btn-white-brand" href={b.link} target="_blank" rel="noreferrer">
                      <img className="mr-15" src={`/assets/img/hero/${b.img}.png`} alt="" />
                      {b.title} <i className="fal fa-long-arrow-right"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;