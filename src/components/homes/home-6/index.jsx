import React, { useEffect } from 'react';
import { FooterFive, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import TestimonialArea from '../home-4/testimonial-area';
import AboutArea from './about-area';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import HeroArea from './hero-area';
import Industries from './industries';
import Projects from './projects';
import ServicesArea from './services-area';

const HomeSix = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Header/>
      <HeroArea/>
      {/* 
      <BrandArea/>
      <ServicesArea/>
      <Industries/>
      <AboutArea/>
      <Projects/>
      <TestimonialArea home_6={true}/>
      <BlogArea/> */}
      <FooterFive/>
    </Wrapper>
  );
};

export default HomeSix;