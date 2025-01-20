import React, { useEffect } from 'react';
import { FooterFive, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import CtaTwo from '../common/cta/cta-2';
import AboutArea from './about-area';
import FeatureArea from './feature-area';
import ServicesArea from './services-area';
import TeamArea from './team-area';
import Services from './services';
import Features from './features';


const About = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  return (
    <Wrapper>
      <Header />

      <Breadcrumb title={'Vuvu Properties Training Academy'} />
      <AboutArea/>
      <ServicesArea/>
      <FeatureArea/>
      <Services/>
      <Features /> 
      <FooterFive />
    </Wrapper>
  );
};

export default About;

/**
 * 
 *    <CtaTwo/>
   
 * 
 */