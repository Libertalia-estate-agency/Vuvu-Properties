import React, { useEffect } from 'react';
import { FooterFive, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import ClientFeedback from './client-feedback';
import FeatureArea from './feature-area';
import HeroArea from './hero-area';
import MissionArea from './mission-area';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import TeamArea from './team-area';


const HomeFive = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <HeroArea/>   {/*
      <FeatureArea/>
      <ServicesArea/>
      <MissionArea/>
      <BrandArea/>
      <ProjectArea/>
      <TeamArea/>
      <ClientFeedback/>
      <BlogArea/>   */}
      <FooterFive/>
    </Wrapper>
  );
};

export default HomeFive;