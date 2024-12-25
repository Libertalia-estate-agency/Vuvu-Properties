import React from 'react';

const contents = {
  title: 'Personal Experience',
  text_1: 'With years of hands-on experience, the founder has successfully facilitated numerous property sales and rentals. The founder’s journey is a testament to the values that Vuvu Properties upholds—integrity, professionalism, and a client-first approach. By leveraging extensive knowledge and experience, our founder ensures that every client receives unparalleled service tailored to their needs.',
  text_2: 'Passionate about creating opportunities and fostering empowerment within the real estate industry, Nomvula is a dedicated mentor to emerging professionals in the field who has facilitated transactions across residential, commercial, and industrial sectors - Building a legacy of trust and excellence in the real estate industry.',
  feature_items: [
    {
      title: 'Skills', desc: "A dynamic set of capabilities refined through years of experience, enabling exceptional results in real estate and business leadership. Proven ability to steer businesses toward growth and sustainability through effective decision-making and visionary planning. Expertise in building long-term relationships with clients by providing personalized and efficient property solutions.",
      lists: ['Strategic Leadership', 'Real Estate Management', 'Financial Acumen', 'Corporate Governance', 'Client Relations']
    },
    {
      title: 'Education', desc: "An impressive academic foundation combined with professional certifications, laying the groundwork for leadership in the real estate sector. Solid foundation in accounting and business principles essential for managing finances and real estate operations. Recognition as a professional qualified to handle transactions, manage client expectations, and uphold industry standards.",
      lists: ['BCompt Degree', 'BCompt (Hons)', 'Certified Property Practitioner in Real Estate', 'Corporate Governance Certificate']
    },
    {
      title: 'Awards', desc: "Recognition for outstanding contributions and exceptional performance in the real estate sector, celebrating a commitment to excellence.",
      lists: ['Top Real Estate Practitioner Award (2023)', 'Leadership Excellence (2024)', 'Governance Award', 'Best Seller Award']
    },
  ]
}

const { title, text_1, text_2, feature_items } = contents;

const ExperienceArea = () => {
  return (
    <>
      <div className="tp-skill-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="amskill">
                <div className="amskill__title">
                  <h3 className="am-skill-title">{title}</h3>
                  <p className="pb-10">{text_1}</p>
                  <p>{text_2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row feature-bottom-space">
            {feature_items.map((item, i) => {
              const {title,desc,lists} = item;
              return <div key={i} className="col-xl-4 col-lg-4">
                <div className="amfeature">
                  <div className="amfeature__item">
                    <h4 className="am-skill-sm-title">{title}</h4>
                    <p className={`am-p-space-${i+1}`}>{desc}</p>
                  </div>
                  <div className="amfeature__list">
                    <ul>
                      {lists.map((l,i) => <li key={i}><i className="fal fa-check"></i>{l}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceArea;