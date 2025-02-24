import React from 'react';

import Image from 'next/image';

const AboutMeArea = ({team}) => {
  // console.log(team);
  const {social_links,img,name,title} = team || {};
  return (
    <>
      <div className="am-about-me-area pt-110 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-5 col-12">
              <div className="ac-ab-img fix">
                <Image 
                                                    src={img} 
                                                    alt="Hero Image" 
                                                    layout="responsive"  
                                                    width={550} 
                                                    height={450}
                                                  />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-12">
              <div className="row">
                <div className="col-xl-7 col-lg-8 col-md-6">
                  <div className="amaboutinfo">
                    <div className="amaboutinfo__client-info">
                      <h4>{name}</h4>
                      <span>{title}</span>
                      <p>At the heart of Vuvu Properties is a dynamic leader whose passion for property and commitment to excellence drives our mission to provide top-tier property transaction services.</p>
                    </div>
                    <div className="amaboutinfo__experience">
                      <p><b>Expertise:</b> Strategic Leadership </p>
                      <p><b>Experience:</b> 22 Years</p>
                      <p><a href="mailto:webmail.info@gmail.com"><b>E-mail:</b> nomvula@vuvuproperties.co.za</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-6">
                  <div className="amaboutsocial text-start text-md-end">
                    {social_links?.map((link,i) => (
                    <div key={i} className="amaboutsocial__icon mb-30">
                      <a href={link?.link} target={link?.target} className="si-btn-link">
                        <div className="tp-si-wrapper d-flex justify-content-end">
                          <div className={`tp-si__text tp-si-color-${i+2}`}><span>{link?.name}</span></div>
                          <div className={`tp-si__icon tp-si-color-${i+2}`}>
                            <i className={link?.icon}></i></div>
                        </div>
                      </a>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeArea;