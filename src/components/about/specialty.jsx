import React from 'react';

const Specialities = () => {
  return (
    <div className="tp-industri-area pb-130 p-relative">
      <div className="bs-industri-1 d-none d-lg-block">
        <img src="assets/img/chose/hero-shape-5.1.png" alt="" />
      </div>
      <div className="container tp-industri-bg">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-project-section-box text-center">
              <h2 className="tp-title-sm pb-60">Areas Of Expertise</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center tp-industri-space">
          <div className="col-12">
            <SpecialtyItem duration={'.3s'} delay={'.5s'} title={'Luxury Apartment'} />
            <SpecialtyItem duration={'.5s'} delay={'.7s'} number={'one'} title={'Commercial Office Space'} />
            <SpecialtyItem duration={'.7s'} delay={'.9s'} number={'two'} title={'Estate Apartments'} />
            <SpecialtyItem duration={'.9s'} delay={'1s'} number={'three'} title={'Townhouses'} />
            <SpecialtyItem duration={'1s'} delay={'1.1s'} number={'four'} title={'Agricultural Farms'} />
            <SpecialtyItem duration={'1.1s'} delay={'1.2s'} number={'five'} title={'Residential Lands'} />
            <SpecialtyItem duration={'1.2s'} delay={'1.3s'} number={'six'} title={'Property Management'} />
            <SpecialtyItem duration={'1.3s'} delay={'1.3s'} number={'seven'} title={'Wealth Management'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;


const SpecialtyItem = ({ duration, delay, number, title }) => {
  return (
    <a href="#">
      <div className="tpindustri wow tpfadeUp" data-wow-duration={duration} data-wow-delay={delay}>
        <div className="tpindustri__content">
          <h3 className={`tp-industri-title ${number ? `tp-ind-color-${number}` : ''}`}>{title}</h3>
        </div>
      </div>
    </a>
  )
}