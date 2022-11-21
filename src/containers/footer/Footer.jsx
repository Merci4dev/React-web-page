import React from 'react'
import './footer.css'
import web3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='web3__footer section__padding'>
      <div className='web3__footer-heading'>
          <h1 className='gradient__text'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
      </div>
      <div className='web3__footer-btn'>
          <p>Request Early Access</p>
      </div>
      <div className='web3__footer-links'>
        <div className='web3__footer-links_logo'>
            <img src={web3Logo} alt="logo"/>
            <p>Address Lorem ipsum dolor, sit amet consectetur adipisicing. </p>
        </div>
        <div className='web3__footer-links_div'>
            <h4>Links</h4>
            <p>Overones</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
        </div>

        <div className='web3__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & condictions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
        </div>

        <div className='web3__footer-links_div'>
            <h4>Get in touch</h4>
            <p>Address  lc.meriland 3234</p>
            <p>+098 232 3232</p>
            <p>info@web3.com</p>
        </div>
      </div>
      <div className='web3__footer-copyright'>
          <p>@ 2022 WEB3 All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer