import React, { useEffect } from 'react';
import { FooterFive, Header, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ProductDetailsArea from './product-details-area';


const ProductsDetails = ({product}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <Breadcrumb title={product?.title ? product?.title : 'Course Details'} />
      <ProductDetailsArea product={product}/>
      <FooterFive />
    </Wrapper>
  );
};

export default ProductsDetails;