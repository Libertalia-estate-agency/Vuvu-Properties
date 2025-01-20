import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import AcademyMain from '../components/academy';


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Training Academy'} />
      <AcademyMain />
    </Wrapper>
  );
};

export default index;