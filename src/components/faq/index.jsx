import React, { useEffect } from 'react';
import { FooterFive, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import FaqArea from './faq-area';


const Faq = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Frequently Asked Questions'} />
      <FaqArea />
      <Cta/>
      <FooterFive />
    </Wrapper>
  );
};

export default Faq;