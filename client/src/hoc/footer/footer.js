import React from 'react';
import './footer.css';

import { FaLinkedin } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { GiPhone } from 'react-icons/gi'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa';

const Footer = () =>{
    return(
        <div className='footerformat'>
            <div className='subscribeformat'>
                <div className='subscribelabels'>
                    <label className='subscribetext'>Subscribe</label>
                    <p className='getupdatestext'>Get the latest updates and offers</p>
                </div>
                <div className='emaildetailsubmit'>
                    <input type='text' placeholder='Your Email' className='emailtext'/>
                    <button className='subscribebutton'>SUBSCRIBE</button>
                </div>
            </div>
            <div className='followmeformat'>
                <label className='followustext'>Contact Us</label>
                <div className='socialmedia'>
                    <FaLinkedin className='linkedin' onClick={()=>window.location.href = 'https://www.linkedin.com/in/ankit-jaiswal-b51b57129'}/>
                    <CgMail className='linkedin' onClick={()=>window.location.href = 'mailto:ankitjswl56@gmail.com'}/>
                    <GiPhone className='linkedin' onClick={()=>window.location.href = 'tel:+917206230848'}/>
                    <IoLogoWhatsapp className='linkedin'onClick={()=>window.location.href = 'https://api.whatsapp.com/send?phone=+917206230848'}/>
                    <FaInstagram className='linkedin' onClick={()=>window.location.href = 'https://www.instagram.com/ohankitx'}/>
                </div>
            </div>

        </div>
    )
}
export default Footer;