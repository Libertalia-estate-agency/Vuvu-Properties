import React, { useEffect } from 'react';
import { FooterFive, Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import MasonryItems from './masonry-items';

const PortfolioMasonry = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={"Gauteng"} />
      <MasonryItems />
      <FooterFive />
    </Wrapper>
  );
};

export default PortfolioMasonry;