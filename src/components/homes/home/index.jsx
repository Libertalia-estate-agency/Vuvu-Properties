import React, { useEffect } from 'react';
import { Footer, FooterFive, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CreativeArea from './creative-area';
import HeroArea from './hero-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import ServiceArea from './service-area';

import Testimonial from './testimonial';

import Specialities from './specialty';
import MissionArea from './mission-area';
import ServicingArea from './servicing-area';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, [])
  return (
    <Wrapper>
      <Header />
      <HeroArea />
      <MissionArea /> 
      <Specialities />
      <ServicingArea />
      <ServiceArea />

      <CreativeArea/>
      
      <ServicesArea/>
      <ProjectArea/>

      <BrandArea/>
      <NewsLetter/>
      
      <Testimonial/>
      
      <FooterFive/>
    </Wrapper>
  );
};

export default Home;

/**
 * 
      <BlogArea/>
 * 
 */