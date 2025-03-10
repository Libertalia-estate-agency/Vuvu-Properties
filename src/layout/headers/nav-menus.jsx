import Link from 'next/link';
import React from 'react';
import menu_data from './menu-data';

const NavMenus = () => {
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li key={i} className={`${menu.has_dropdown ? 'has-dropdown' : ''}
      ${menu.mega_menu ? 'has-mega-menu' : ''}`}>
          <Link href={menu.link}>
            <a>
              <span className="">{menu.title}</span> 
              {menu.has_dropdown && <i className="fal fa-angle-down"></i>}
              
            </a>
          </Link>
          {menu.has_dropdown && <ul className="submenu text-start">
            {menu.sub_menus.map((sub_m, i) => (
              <li key={i}>
                <Link href={sub_m.link}>
                  <span className="submenu-badge">{sub_m.title}</span>
                </Link>
              </li>
            ))}
          </ul>}
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;