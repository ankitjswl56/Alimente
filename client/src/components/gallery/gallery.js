import React from 'react';
import './gallery.css';
import { Link } from 'react-router-dom';

const Gallery = () =>{
    return(
        <div>
            <div className='gallerydrinks' data-aos='zoom-in'>
                <img alt='galleryimage' src='./images/gallerydrinks.jpeg' className='gallerydrinks'/>    
                <p className='quote1'>YOUR FAVOURITE FOOD MAKE IT GOOD</p>
            </div>
            <div className='component2ofgallery'>
                <div className='gallerycomp2'>
                    <div className='comp2textbox' data-aos='fade-right'>
                        <p className='foodmenutxt'>RESTAURANT FOOD MENU</p>
                        <p className='foodmenudesc'>All of our food is prepared by the team of trained kitched staff without any risk of little paws getting involved. You can see your food being prepared from the sealed glass in restaurant</p>
                    </div>
                    <div className='comp2background'/>
                    <div className='comp2imgdiv' data-aos='fade-left'>
                        <img alt='galleryimage' src='./images/galleryportrait.jpeg' className='comp2imgdiv'/>
                    </div>
                    
                </div>
                <div className='imgwithdesc'>
                    <div data-aos='fade-up'>
                        <img alt='galleryimage' src='./images/galleryburger.jpeg' className='burgerimage'/>
                    </div>
                    <div className='burgerbox' data-aos='fade-down'>
                        <p className='foodmenutxt'>Have a healthy afternoon snack</p>
                        <p className='foodmenudesc2'>The majority of the poeple in the working world are like to be familiar with the mid afternoon snack.</p>
                    </div>
                    <div data-aos='fade-up'>
                        <img alt='galleryimage' src='./images/gallerywaffers.jpeg' className='wafferimage'/>
                    </div>
                    <div className='wafferbox' data-aos='fade-dowm'>
                        <p className='foodmenutxt'>Include some tasty desserts in your food</p>
                        <p className='foodmenudesc2'>Dessert is to help aid for the day. However, that's not the only benifit it is known for. </p>
                    </div>
                </div>
            </div>
            <div className='gallerywholebackground'>
                <img alt='galleryimage' src='./images/gallerysalad.jpeg'  data-aos='zoom-in' className='gallerysalad'/>
                <p className='saladtopic' data-aos='fade-left'>Time to Make a Difference</p>
                <p className='saladdesc ' data-aos='fade-left'>Aside from their natural good taste and great crunchy texture alongside wonderful colors and fragrances, eating a large serving of fresh, raw vegetables each day can have significant health benefits.</p>
            </div>
            <div className='gallerytastiest'>
                <div/>
                <div className='twotastiestimg'>
                    <img alt='galleryimage' src='./images/gallerytastiest1.jpeg' data-aos='fade-up' className='tastiestimg1'/>
                    <img alt='galleryimage' src='./images/gallerytastiest2.jpeg' data-aos='fade-up' className='tastiestimg1'/>
                </div>
                <p className='tastiestheadtxt' data-aos='fade-up'>
                    Which is the tastiest food?
                </p>
                <p></p>
                <Link to='/menu'><button className='findoutbutton' data-aos='zoom-in'> Find Out </button></Link>
            </div>
            <div className='breakfast' data-aos='fade-up'>
                <img alt='galleryimage' src='./images/gallerybreakfast.jpeg' className='breakfast'/>
                <p className='morningtimetxt'>Enjoy Morning Time</p>
            </div>
        </div>
    )
}
export default Gallery