import Link from 'next/link';
import React, { useState } from 'react';
import menu_data from '../../../layout/headers/menu-data';
import { FaHome } from 'react-icons/fa';
import SocialLinks from './social-links';

const sidebar_contents = {
  title: <>Where Ownership meets Excellence</>,
  inst_imgs: [
    '/assets/img/offcanvas/insta-1.jpg',
    '/assets/img/offcanvas/insta-2.jpg',
    '/assets/img/offcanvas/insta-4.jpg',
    '/assets/img/offcanvas/insta-4.jpg',
  ]
}
const { inst_imgs, title } = sidebar_contents;

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState('')

  const openMobileMenu = (menu) => {
    if(navTitle === menu){
      setNavTitle('')
    }
    else {
      setNavTitle(menu)
    }
  };
  return (
    <>
      <div className="tp-offcanvas-area">
        <div className={`tpoffcanvas ${isOpen ? 'opened' : ''}`}>
          <div className="tpoffcanvas__logo">
                <Link href="/">
                  <div className="logo-container d-flex align-items-center">
                      <Link href={'/'}>
                        <a><img src="/assets/img/logo/vuvu1.png" alt="" /></a>
                      </Link>
                  </div>
                </Link>
          </div>
          <div className="tpoffcanvas__close-btn" onClick={() => setIsOpen(false)}>
            <button className="close-btn"><i className="fal fa-times-hexagon"></i></button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                 <li key={i} className={!menu.has_dropdown ? '' : navTitle === menu?.title ? "has-droupdown active" : "has-droupdown"}>
                    {menu.has_dropdown && <button  onClick={() => openMobileMenu(menu.title)}>{menu.title} </button>}
                    <ul className={navTitle === menu?.title ? "sub-menu active" : "sub-menu"}>
                      {menu?.sub_menus?.map((sub,i) => (
                      <li key={i}><Link href={`${sub.link}`}>{sub.title}</Link></li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && <Link href={menu.link}>{menu.title}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-star"></i> <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" rel="noreferrer" target="_blank">P.O.Box 302 <br /> Mulbarton <br /> 2059 <br /> </a>
              </li>
              <li><i className="fas fa-star"></i><a href="tel:8180012345678">083-272-9115</a></li>
              <li><i className="fas fa-star"></i><a href="mailto:Collaxmail@gmail.com">support@vuvuproperties.co.za</a></li>
            </ul>
          </div>
          <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Keep Updated</p>
            <form className="p-relative" action="#">
              <input type="text" placeholder="Enter email address" />
              <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
          <div className="tpoffcanvas__instagram d-none d-sm-block">
            <p>Social Links</p>
            <div className="tp-insta">
              <div className="row" style={{ alignContent: 'center', alignSelf:'center', alignItems: 'center'}}>
                <div className="tp-copyright-social bp-copyright-social tp-copyright-social-two text-center text-lg-end mb-30">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen ? 'apply' : ''}`}></div>
      {/* overlay end */}
    </>
  );
};

export default Sidebar;