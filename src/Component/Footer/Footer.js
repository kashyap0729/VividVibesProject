import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-lg-5 col-12 ft-1'>
                        <a className='navbar-brand' href="/">Vivid Vibes</a>
                        <p>Vivid Vibes is an event management company with exemplary vision.
                            Our mission is to fulfill desires of our clients and convert their dreams into reality.
                        </p>
                        <div className='footer-icons'>
                            <i class="fa-brands fa-facebook"></i>   
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-pinterest"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 col-12 ft-2'>
                        <h4>Quick Links</h4>
                            <ul>
                            <li className='nav-item'>
                                    <a className='' href='/'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='' href='/'>Our Team</a>
                                </li>
                            </ul>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12 ft-3'>
                        <h4>Contact Information</h4>
                        <h6><i class="fa-solid fa-phone"></i>(786)-564-3902</h6>
                        <h6><i class="fa-solid fa-envelope"></i>vividvibes@gmail.com</h6>
                        <h6><i class="fa-solid fa-location-dot"></i>Boston,USA</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom'>
        <h6>&copy; 2023 Copyright: vividvibes.com</h6>  
       </div>
       </>
  );
};

export default Footer;
