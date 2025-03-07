import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import PolicyMain from '../components/policy';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Privacy Policy'} />
      <PolicyMain/>
    </Wrapper>
  );
};

export default index;