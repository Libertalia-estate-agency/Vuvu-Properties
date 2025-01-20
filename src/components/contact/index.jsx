import React, { useEffect } from 'react';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';
import { Footer, FooterFive, Header, Wrapper } from '../../layout';


const Contact = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={'Contact Us'} />
      <ContactArea/>
      <FooterFive />
    </Wrapper>
  );
};

export default Contact;