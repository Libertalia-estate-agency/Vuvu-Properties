import React from 'react';
import { productsData } from '../../data';
import CoursesItem from './courses-item';

const product_items = productsData;

const CourseArea = () => {
  return (
    <>
      <div className="tp-product-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <CoursesItem itemsPerPage={8} items={product_items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseArea;