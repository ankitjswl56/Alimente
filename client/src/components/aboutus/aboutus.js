import React from 'react';
import './aboutus.css';

const Aboutus = () =>{
        return(
            <div className='aboutus'>
                <div className='aboutusimgsection' data-aos='fade-up'>
                    <img alt='aboutusimg' src='./images/aboutusimg.png' className='aboutusimg'/>
                    <p className='aboutusimgtxt' data-aos='zoom-in' data-aos-delay='300'>We are proud <br/> to serving for you</p>
                </div>
                <div className='whoarewe'>
                    <p className='whoarewetext'>WHO ARE WE</p>
                    <div className='fewwords'>
                        <div>
                            <img alt='aboutusimg' src='./images/whoarewe.png' 
                             data-aos="fade-right" data-aos-duration='700' data-aos-delay='500'
                            className='whoareweimg'/>
                        </div>
                        <div>
                            <p className='fewwordstxt1' data-aos="fade-up" data-aos-delay='300'>A FEW WORDS ABOUT US</p>
                            <p className='fewwordstxt2' data-aos="fade-up" data-aos-delay='300'>When visiting our restaurant, just brace yourself to immersing into enjoying a truly delicious and perfectly cooked dishes. <br/><br/>The world-renowned chef showcases exhilarating interpretations of European food in a breathtaking space architect Tadao Ando built as a respite from the non-stop chaos of our City.</p>
                        </div>
                    </div>
                </div>
                <div className='ourpromises'>
                    <p className='whoarewetext'>WHAT WE PROMISE</p>
                    <div className='fewwords'>
                    <div>
                        <p className='fewwordstxt1 safeppromise' data-aos="fade-up" data-aos-delay='500'>A PROMISE FOR SAFETY</p>
                        <p className='promisetxt' data-aos="fade-up" data-aos-delay='500'>We will continue to be a leader in safe sanitation practices with all team members certified in
                            safe food handling and a certified manager on every shift. All employees will pass a health check or complete a health survey prior to each shift. All indoor and outdoor seating options will comply with the appropriate social distancing
                            guidelines. Hand sanitizer or hand washing stations will be available to all customers and employees.</p>
                    </div>
                    </div>
                </div>
                <div className='peoplesayaboutus'>
                    <p className='peoplesaytext'>WHERE ARE WE</p>
                    <div className='location' data-aos="fade-up" data-aos-delay='300'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114311.47785859778!2d87.20176649550594!3d26.44819537842163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744704331cc5%3A0x6d9a85e45c54b3fc!2sBiratnagar%2056613!5e0!3m2!1sen!2snp!4v1621419148429!5m2!1sen!2snp" className='location' style={{border : '2px solid #000000'}}></iframe>
                    </div>
                </div>
            </div>
        )
}
export default Aboutus;
