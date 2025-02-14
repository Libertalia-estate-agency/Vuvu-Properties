import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';

import Image from 'next/image';

const contents = {
  title:'Where Expertise Meets Passion in Real Estate',
  video_title:'Our Story: Building Dreams, One Property at a Time',
  video_id:'8D6b3McyhhU',
  right_text_1:"Discover how Vuvu Properties, a 100% black female-owned agency, is redefining the real estate landscape in Johannesburg with client-focused solutions and unparalleled professionalism. We pride ourselves on delivering seamless property services tailored to meet the unique needs of each client.",
  right_text_2:"Our experienced team is passionate about helping buyers, sellers, and renters achieve their real estate goals with confidence and ease. We understand the local market intricately, ensuring that your property journey is as stress-free and rewarding as possible.",
  client_icon:'/assets/img/about/testi-7.png',
  client_name:'Nomvula M.',
  client_title:'Executive Chairman',
  desc:"Our clients are at the heart of everything we do. At Vuvu Properties, it’s not just about transactions; it’s about building lasting relationships that empower and uplift.",
  about_img:'/assets/img/breadcrum/hero-1.png',
}
const {about_img,client_icon,client_name,client_title,desc,right_text_1,right_text_2,title,video_id,video_title} = contents;

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="ac-about-left">
                  <h3 className="ac-ab-title"><a href="#">{title}</a></h3>
                  <div className="ac-play-button">
                    <button onClick={() => setIsVideoOpen(true)} className="popup-video">
                      <i className="far fa-play"></i></button>
                    <span>{video_title}</span>
                  </div>
                </div>
              </div>
              <div className="col-xl- col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                <div className="ac-about-right">
                  <p className="pb-25">{right_text_1}</p>
                  <p>{right_text_2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ac-testimonial-space">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    
                    <Image 
                                    src={client_icon} 
                                    alt="Hero Image" 
                                    layout="responsive"  
                                    width={550} 
                                    height={450}
                                    style={{ border:'2', borderWidth:'10' }}
                                  />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name"><a href="#">{client_name}</a></h4>
                    <span>{client_title}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p> <span><i className="fas fa-quote-left" style={{ fontSize:'6'}}></i></span> {desc} <span><i className="fas fa-quote-right"></i></span>  </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
                <Image 
                                    src={about_img} 
                                    alt="Hero Image" 
                                    layout="responsive"  
                                    width={550} 
                                    height={450}
                                    style={{ border:'2', borderWidth:'10' }}
                                  />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;