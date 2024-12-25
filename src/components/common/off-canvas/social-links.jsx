import React from 'react';

const social_links=[
  {link: 'https://www.facebook.com/nomvula.maswanganyi/', target: '_blank', icon: 'fab fa-facebook-f'},
  {link: 'https://za.linkedin.com/in/nomvula-maswanganyi-bab38683', target: '_blank', icon: 'fab fa-linkedin'},
  {link: 'https://www.instagram.com/vuvu_2/?hl=en', target: '_blank', icon: 'fab fa-instagram'},
  {link: 'https://www.property24.com/estate-agents/royal-homes/nomvula-maswanganyi/431046', target: '_blank', icon: 'fab fa-youtube'}
]

const hero_socials = [
  { num: 1,link:'http://facebook.com',target: '_blank', icon: 'fab fa-facebook-f social-icon-1', title: 'Facebook' },
  { num: 3,link:'https://www.youtube.com/',target: '_blank',icon: 'fab fa-youtube social-icon-3', title: 'Youtube' },
  { num: 2,link:'http://twitter.com',target: '_blank',icon:'fab fa-twitter social-icon-2', title: 'Twitter' },
]

export const HeroSocials = ({hide_title=false}) => {
  return (
    <>{hero_socials.map((l, i) => <a key={i} href={l.link} className={`social-icon-${l.num}`}
    target={l.target ? l.target:''}><i className={l.icon}></i>{hide_title?'':l.title}</a>)}</>
  );
};

const SocialLinks = () => {
  return (
    <>{social_links.map((l, i) => <a key={i} href={l.link}
    target={l.target ? l.target:''}><i className={l.icon}></i></a>)}</>
  );
};

export default SocialLinks;