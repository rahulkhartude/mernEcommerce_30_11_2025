import React from 'react'
import instagram1 from '../assets/instagram-1.jpg'
import instagram2 from '../assets/instagram-2.jpg';
import instagram3 from '../assets/instagram-3.jpg';
import instagram4 from '../assets/instagram-4.jpg';
import instagram5 from '../assets/instagram-5.jpg';
import instagram6 from '../assets/instagram-6.jpg';


const Footer = () => {
  return (
    <>
    <footer className='section__container footer__container'>
      <div className='footer__col' >
        <h4>CONTACT INFO</h4>
        <p>
            <span><i class="ri-map-pin-2-fill"></i></span>
            108, Wakad Road
        </p>
        <p>
            <span><i class="ri-mail-lock-fill"></i></span>
            rahulkhartude100@gmail.com
        </p>
        <p>
            <span><i class="ri-phone-fill"></i></span>
            7875613130
        </p>
       </div>
       <div className='footer__col' >
        <h4>COMPANY</h4>
        <a href='#'>Home</a>
          <a href='#'>About Us</a>
          <a href='#'>Work With US</a>
          <a href='#'>Our Blog</a>
          <a href='#'>Terms and Conditions</a>
       </div>
        
        <div className='footer__col' >
        <h4>USEFUL LINKS</h4>
        <a href='#'>Help</a>
          <a href='#'>Track My Order</a>
          <a href='#'>Men</a>
          <a href='#'>Women</a>
          <a href='#'>Dresses</a>
       </div>

        <div className='footer__col' >
        <h4>INSTAGRAM</h4>
         <div className='instagram__grid'>
             <img src={instagram1} />
             <img src={instagram2} />
             <img src={instagram3} />
             <img src={instagram4} />
             <img src={instagram5} />
             <img src={instagram5} />
             <img src={instagram6} />
         </div>
         
       </div>
    </footer>
    <div className='footer__bar'>
           © 2025 Rahul Khartude. All rights reserved.
        </div>
        </>
  )
}

export default Footer
