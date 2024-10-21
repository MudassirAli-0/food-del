import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla provident, ab perspiciatis itaque aliquid sapiente ratione corporis porro vitae, aut voluptate ut hic numquam cumque? Dolorem nihil exercitationem vel!</p>
                
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                
                <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy & policy</li>
                    </ul>
            </div>

            <div className="footer-content-right">

                <h2>GET IN TOUCH</h2>
                
                <ul>
                    <li>+1122112244</li>
                    <li>mudassir.asghar2003@gmail.com</li>
                </ul>

            </div>


        </div>
        <hr className='footer-hr' />
        <p className="footer-copywrite">
        Copywrite 2024 © Tomato.com -All Right Reserved.
        </p>
    </div>
  )
}

export default Footer