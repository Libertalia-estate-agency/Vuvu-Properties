const news_letter_contents = {
  bg_img:'/assets/img/news/news-shape.png',
  subtitle:'Stay Connected with Vuvu Properties',
  title:'Get the Latest Property Insights, Market Trends, and Exclusive Offers',
  btn_text:'Subscribe',
  news_l_img:'/assets/img/news/news-1.png',
  shape_img:'/assets/img/news/news-shape-2.png'
}

const {bg_img,btn_text,news_l_img,shape_img,subtitle,title} = news_letter_contents;

const NewsLetter = () => {
  return (
    <div className="tp-news-letter-area pb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".4s">
      <div className="container">
        <div className="tp-news-letter-box p-relative" style={{backgroundColor:'saddlebrown', backgroundImage:`url(${bg_img})`,backgroundRepeat:'no-repeat',backgroundPosition:'right',backgroundSize:'contain'}} >
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8 col-12  ">
              <div className="tp-news-wrapper pl-90 z-index-1">
                <div className="tp-news-letter-section-box">
                  <h5 className="tp-subtitle subtitle-secondary-color">{subtitle}</h5>
                  <h1 style={{ fontSize: '32px' }} className="tp-title tp-white-text text-sm">{title}</h1>
                </div>
                <div className="tp-news-button p-relative">
                  <form onSubmit={e => e.preventDefault()}>
                    <input style={{backgroundColor:'azure', color:'black', textDecorationColor:'black' }} type="text" placeholder="Enter your email address" />
                    <button className="tp-submit-button tp-btn-yellow-semilar" style={{ color:'azure'}} type="submit">{btn_text} <i
                      className="far fa-arrow-right"></i></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 text-lg-end col-md-4  ">
              <div className="tp-news-letter-img">
                <img src={news_l_img} alt="" />
              </div>
            </div>
          </div>
          <div className="tp-news-shape-img">
            <img src={shape_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;