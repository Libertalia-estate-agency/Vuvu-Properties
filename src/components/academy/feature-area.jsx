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
  title: 'Academy Facilities and Resources',
  sm_desc_1: "Offering comprehensive courses tailored for beginners, seasoned professionals, and aspiring investors, our academy equips you with the tools and knowledge to excel in the dynamic property industry.",
  sm_desc_2: "To cultivate a new generation of skilled real estate professionals and property investors through practical, innovative, and accessible training programs that reflect the evolving demands of the real estate market."
}
const { title, sm_desc_1, sm_desc_2 } = contents;

const Features = () => {
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
              <FeatureItem title={'Training Center'}
                subtitle={'A modern facility equipped with lecture rooms, computer labs, and a resource library. ...'} />
              <FeatureItem title={'Online Platform'} color={'2'}
                subtitle={'A dedicated learning management system (LMS) with video lectures, downloadable resources, and discussion forums...'} />
              <FeatureItem title={'Mentorship Program'} color={'3'}
                subtitle={'Experienced real estate professionals available to guide participants ...'} />
              <FeatureItem title={'Networking Events'} color={'4'}
                subtitle={'Opportunities to connect with industry experts and peers ...'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;