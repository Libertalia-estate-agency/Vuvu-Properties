import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';
import Image from 'next/image';

const contents = {
  title:'Where Expertise Meets Passion in Real Estate',
  video_title:'Our Story: Building Dreams, One Property at a Time',
  video_id:'8D6b3McyhhU',
  right_text_1:"The Vuvu Properties Training Academy aims to empower aspiring real estate professionals and individuals interested in property investment, management, and development. The academy will provide a platform for education, mentorship, and skill-building in the real estate sector.",
  right_text_2:"This initiative aligns with Vuvu Properties' mission to uphold professionalism, integrity, and empowerment within the property industry, especially targeting historically underrepresented communities. ",
  client_icon:'/assets/img/about/profile.png',
  client_name:'Nomvula M.',
  client_title:'Accredited Lead Instructor',
  desc:"Empowering individuals with the right knowledge and tools not only changes their lives but also transforms the real estate landscape for the better.",
  about_img:'/assets/img/hero/hero4.jpg',
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
                    <img src={client_icon} alt="" />
                    
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
                <div className="image-container wow fadeInRight" data-wow-duration=".7s" data-wow-delay="1.2s">

                  <Image 
                                    src={about_img} 
                                    alt="Hero Image" 
                                    layout="responsive" 
                                    width={'100%'} 
                                    height={'100%'} 
                                    className="rounded-image"
                                  />
                </div>
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