import Link from 'next/link';
import React from 'react';
import useModal from '../../../hooks/use-modal';
import { HeroSocials } from '../../../layout/social-links';
import { HighlightSix } from '../../../svg';
import VideoModal from '../../common/modals/modal-video';

import Image  from 'next/image';

const hero_contents = {
  title: <>Providing Unmatched <span className="tp-highlight"> <HighlightSix /> <i>Property Solutions</i>
  </span> </>,
  sm_text: <>At Vuvu Properties, we specialize in sourcing, selling, and managing premium properties with efficiency, professionalism, and client-focused service.</>,
  video_id: 'AFHnVR1vb84',
  video_title: 'Behind the scenes',
  hero_img: '/assets/img/hero/hero6.jpg',
}

const { hero_img, sm_text, title, video_id, video_title } = hero_contents;

const HeroArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <React.Fragment>
      <div className="tp-hero-area tp-hero-border tp-bp-hero-space p-relative grey-bg fix">
        <div className="tp-hero-social bs-hero-social d-none d-xxl-block">
          <HeroSocials />
        </div>
        <div className="tp-bp-hero-shape d-none d-lg-block wow tpfadeRight"
          data-wow-duration=".3s" data-wow-delay=".6s">
          <img src="assets/img/hero/hero-shape-6.1.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-12">
              <div className="tp-hero-section-box tp-bp-hero-section-box">
                <h3 className="tp-hero-title tp-bs-hero-title wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">{title}</h3>
                <p className="wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">{sm_text}</p>
                <div className="tp-hero-three-button-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1.1s">
                  <div className="xs-bottom-space">
                    <Link href="/contact">
                      <a className="tp-btn-sky mr-55">Contact us</a>
                    </Link>
                  </div>
                  <div onClick={() => setIsVideoOpen(true)}
                    className="tp-hero-paly-button tp-bp-hero-paly-button  z-index-1">
                    <button className="popup-video"><i className="far fa-play"></i></button>
                    <span>{video_title}</span>
                  </div>
                </div>
                <div className="tp-hero-social  pb-30 d-xxl-none d-xl-block">
                  <div className="tp-hero-social bp-hero-social bs-xl-hero-social">
                    <HeroSocials hide_title={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="tp-hero-right">
                <div className="tp-bp-hero__img  p-relative wow tpfadeRight"
                  data-wow-duration=".9s" data-wow-delay="1s">
                  <div className="image-container wow fadeInRight" data-wow-duration=".7s" data-wow-delay="1.2s">
                                    
                                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}

    </React.Fragment>
  );
};

export default HeroArea;  
 
 
/***
 * <Image 
                                      src={hero_img} 
                                      alt="Hero Image" 
                                      layout="responsive"  
                                      width={550} 
                                      height={450} 
                                      className="rounded-image"
                                    />
 * 
 * 
 * 
 */