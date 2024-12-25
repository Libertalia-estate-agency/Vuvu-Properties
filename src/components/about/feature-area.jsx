import Link from 'next/link';
import React from 'react';

function FeatureItem({ title, subtitle, color }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
      <div className='acfeature mb-50'>
        <div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`}></div>
        <div className="acfeature__item">
          <h3 className="ac-feature-sm-title">
            <Link href="/about-me">
              <a>{title}</a>
            </Link>
          </h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const contents = {
  title: 'Shape Your Future in Real Estate with Expert Training',
  sm_desc_1: "Take the first step toward a successful real estate career. Enroll today and unlock your potential with Vuvu Training Academy.",
  sm_desc_2: "Whether you're starting your journey in real estate or seeking to advance your career, our academy equips you with the knowledge, skills, and confidence to thrive in the competitive property market."
}
const { title, sm_desc_1, sm_desc_2 } = contents;

const FeatureArea = () => {
  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-left">
                <h3 className="ac-feature-title">{title}</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-right">
                <p className="pb-25">{sm_desc_1}</p>
                <p>{sm_desc_2}</p>
              </div>
            </div>
          </div>
          <div className="ac-feature-border-top">
            <div className="row">
              <FeatureItem title={'Real Estate Basics for Beginners'}
                subtitle={'Comprehensive, hands-on curriculum...'} />
              <FeatureItem title={'Property Valuation and Market Analysis'} color={'2'}
                subtitle={'Expert trainers with years of industry experience..'} />
              <FeatureItem title={'Marketing and Branding for Real Estate Agents'} color={'3'}
                subtitle={'Practical case studies and real-world examples...'} />
              <FeatureItem title={'Legal and Compliance Training'} color={'4'}
                subtitle={'Investment Strategies and Portfolio Management...'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;