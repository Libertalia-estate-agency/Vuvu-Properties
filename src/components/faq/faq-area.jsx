import React from 'react';

const accordion_items = [
    { 
      id: 'one', 
      show: true, 
      title: 'How do I list my property with Vuvu Properties?', 
      desc: "Listing your property with Vuvu Properties is simple. Contact our team, and we will guide you through the process, including property valuation, marketing, and finding the right buyers or tenants." 
    },
    { 
      id: 'two', 
      show: false, 
      title: 'What services does Vuvu Properties offer besides sales?', 
      desc: "Beyond property sales, we offer rentals and leasing, property management, real estate training, and market analysis to help clients make informed real estate decisions." 
    },
    { 
      id: 'three', 
      show: false, 
      title: 'What documents do I need to buy a property?', 
      desc: "To purchase a property, you will need a valid South African ID, proof of income, a pre-approved home loan (if applicable), and FICA-compliant documentation such as proof of residence." 
    },
    { 
      id: 'four', 
      show: false, 
      title: 'Does Vuvu Properties assist with property financing?', 
      desc: "Yes, we can connect you with reputable financial institutions and guide you through the home loan application process to help secure financing for your property purchase." 
    },
    { 
      id: 'five', 
      show: false, 
      title: 'How does Vuvu Properties screen tenants for rental properties?', 
      desc: "We conduct thorough tenant screening, including credit checks, employment verification, rental history reviews, and reference checks to ensure reliable tenants for landlords." 
    },
    { 
      id: 'six', 
      show: false, 
      title: 'What are the benefits of enrolling in the Vuvu Properties Training Academy?', 
      desc: "Our Training Academy provides aspiring real estate professionals with accredited courses, mentorship programs, and hands-on experience to help them succeed in the industry." 
    },
    { 
      id: 'seven', 
      show: false, 
      title: 'How can I determine the market value of my property?', 
      desc: "We offer professional property valuation services, including Comparative Market Analysis (CMA) and expert insights, to help you determine the accurate market value of your property." 
    },
    { 
      id: 'eight', 
      show: false, 
      title: 'What legal requirements should I be aware of when buying or selling property?', 
      desc: "Buying or selling property involves legal requirements such as FICA compliance, transfer duties, and property registration. Our team can guide you through the legal process to ensure compliance." 
    }
]

const FaqArea = () => {
  return (
    <>
      <div className="sd-accordio-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-custom-accordio faq-accordio-border">
                <div className="accordion" id="accordionExample">

                  {accordion_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return <div key={id} className='accordion-items'>
                      <h2 className="accordion-header" id={`heading-${id}`}>
                        <button className={`accordion-buttons ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`}
                          aria-expanded={show ? 'true' : 'false'} aria-controls={`collapse-${id}`}>
                          {title}
                        </button>
                      </h2>
                      <div id={`collapse-${id}`} className={`accordion-collapse collapse ${show ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {desc}
                        </div>
                      </div>
                    </div>
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;