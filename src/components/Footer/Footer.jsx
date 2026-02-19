import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
         <div className="footer-content-left">
            <p className='para1'>Every sip, every bite, is a moment to savor. We believe that life's sweetest joys are found in simple pleasures—rich flavors, 
              comforting aromas, and the little indulgences that make each day special. At Bake&Shake,
              we craft every beverage and dessert with care and brighten your day.</p>
            <div className="footer-social-icons">
                <img src={assets.logo} alt="" />
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.ig_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                
            </div>
         </div>
         <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
         </div>
         <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+254-706-914-431</li>
            <li>contact@royalty.com</li>
           </ul>
         </div>
        </div>
        <hr />
        <p className="footer-copyright">copyright 2026 © 2026 Royalty. All rights reserved.</p>
    </div>
  )
}

export default Footer
