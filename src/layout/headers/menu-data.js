const menu_data = [
  {
    id:1,
    mega_menu:true,
    has_dropdown:false,
    title:'Home',
    link:'/',
    sub_menus:[
      {link:'/',title:'Home'}
    ]
  },
  {
    id:2,
    mega_menu:false,
    has_dropdown:false,
    title:'About Us',
    link:'/about',
  },
 
  {
    id:4,
    mega_menu:true,
    has_dropdown:true,
    title:'Services',
    link:'#',
    sub_menus:[
      {link:'/academy',title:'Real Estate Training Academy'},
      {link:'/property-valuation',title:'Property Valuation Services'},
      {link:'/advisory',title:'Advisory & Consultation'},
      {link:'/property-management',title:'Property Management Services'},
    ]
  },
  {
    id:5,
    mega_menu:false,
    has_dropdown:true,
    title:'Resources',
    link:'/',
    sub_menus: [
      {link:'/blog',title:'News'},
      {link:'/faq',title:'FAQs'},
      {link:'/policy',title:'Privacy Policy'}, 
    ]
  },
  {
    id:6,
    mega_menu:false,
    has_dropdown:false,
    title:'Contact Us',
    link:'/contact',
  }
]

{/**
const menu_data = [
  {
    id:1,
    mega_menu:false,
    has_dropdown:true,
    title:'Home',
    link:'/',
    sub_menus:[
      {link:'/',title:'Creative Agency'},
      {link:'/home-2',title:'Personal Portfolio'},
      {link:'/home-3',title:'Startup Business'},
      {link:'/home-4',title:'Digital Agency'},
      {link:'/home-5',title:'Business Advisor'},
      {link:'/home-6',title:'IT Service Agency'},
    ]
  },
  {
    id:2,
    mega_menu:false,
    has_dropdown:true,
    title:'Portfolio',
    link:'/portfolio',
    sub_menus:[
      {link:'/portfolio',title:'Portfolio Full Width'},
      {link:'/portfolio-2',title:'Portfolio Filter 01'},
      {link:'/portfolio-3',title:'Portfolio Filter 02'},
      {link:'/portfolio-masonry',title:'Portfolio Masonry'},
      {link:'/portfolio-details',title:'Portfolio Details'},
    ]
  },
   {
    id:3,
    mega_menu:false,
    has_dropdown:true,
    title:'Properties',
    link:'/',
    sub_menus: [
      {link:'/',title:'For Rent'},
      {link:'/',title:'For Sale'},
      {link:'/404',title:'Buy Property'},
    ]
  },
  {
    id:3,
    mega_menu:true,
    has_dropdown:true,
    title:'Pages',
    link:'#',
    sub_menus:[
      {link:'/about',title:'About'},
      {link:'/about-me',title:'About Me'},
      {link:'/job',title:'Job'},
      {link:'/job-details',title:'Job Details'},
      {link:'/product',title:'Product'},
      {link:'/product-details',title:'Product Details'},
      {link:'/service-1',title:'Service 01'},
      {link:'/service-2',title:'Service 02'},
      {link:'/service-3',title:'Service 03'},
      {link:'/service-4',title:'Service 04'},
      {link:'/service-details',title:'Service Details'},
      {link:'/testimonial',title:'Testimonial'},
      {link:'/price',title:'Price'},
      {link:'/faq',title:'Faq'},
      {link:'/login',title:'Login'},
      {link:'/register',title:'Register'},
      {link:'/cart',title:'Cart'},
      {link:'/wishlist',title:'Wishlist'},
      {link:'/checkout',title:'Checkout'},
      {link:'/404',title:'404'},
    ]
  },
  {
    id:4,
    mega_menu:false,
    has_dropdown:true,
    title:'Blog',
    link:'/blog',
    sub_menus:[
      {link:'/blog',title:'Blog Sidebar'},
      {link:'/blog-details',title:'Blog Details'},
    ]
  },
  {
    id:5,
    mega_menu:false,
    has_dropdown:false,
    title:'Contact',
    link:'/contact',
  }
]
 */}

export default menu_data;

