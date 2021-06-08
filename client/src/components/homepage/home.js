import React from 'react';
import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import './home.css';
import {signupuser,signinuser,picclicked} from '../../actions'
import {connect} from 'react-redux';

import { GiMeal } from 'react-icons/gi'
import { MdPayment } from 'react-icons/md'
import { FcInTransit } from 'react-icons/fc';

class Home extends Component{
    state = { 
        name : '',
        email : '',
        password : '',
        phonenumber : '',
        picclicked : ''
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.loginauth){
            alert('Welcome. Your are successfully Signed up.')
            window.location.href = '/menu'
        }else if(nextProps.user.login.message){
            alert(nextProps.user.login.message)
        }
    }
    render(){  
        const homepagesignup = () =>{
            if(this.state.name === '' ||
                this.state.email === '' ||
                this.state.password === '' ||
                this.state.phonenumber === ''
            ){
                alert('Please fill the form completely')
            }else if(
                this.state.password.length < 4
            ){
                alert('Password should be atleast 4 characters')
            }else if(this.state.phonenumber.length != 10){
                alert('Phonenumber invalid')
            }else{
                if(this.props.user.login.loginauth){
                    alert('Already Signed In')
                    window.location.href = '/userprofile'
                }else{
                    this.props.signupuser(
                        this.state.name,
                        this.state.email,
                        this.state.password,
                        this.state.phonenumber
                    )
                }
            }
        } 
        return(
            <div>
                <Carousel className='carousel' showThumbs={true} autoPlay={true} infiniteLoop={true}>
                    <div className='imagesformat' data-aos='fade-up'>
                        <div className='textinimage'>
                            <p className='text1'>---A Variety Of Dishes---</p>
                            <p className='text2'>Continental And Authentic Local Food</p>
                            <p className='text3'>In our menu you can find lots of tasty and interesting dishes, including pizzas of all kinds. We also offer a wide range of seafood dishes, even if you are just looking for an affordable snack.</p>
                            <Link to='/menu'><button className='orderbutton'>Order Online</button></Link>
                        </div>
                        <img alt='homeimg' src='./images/image1.png'/>
                    </div>
                    <div className='imagesformat'>
                    <div className='textinimage'>
                            <p className='text1'>---Affordable Organic Food---</p>
                            <p className='text2'>The Taste Of Home With Freshness</p>
                            <p className='text3'>Looking for fresh and tasty breakfasts and lunches? At Food Delivery, you can order any kind of morning snack from local restaurants at reasonable prices without any extra charges.</p>
                            <Link to='/menu'><button className='orderbutton'>Order Online</button></Link>
                        </div>
                        <img alt='homeimg' src='./images/image2.png'/>
                    </div>
                    <div className='imagesformat'>
                        <div className='textinimage'>
                            <p className='text1'>---All Of Your Favorites---</p>
                            <p className='text2'>Food Delivery Service</p>
                            <p className='text3'>Welcome to Alimente, a place where you can order your favorite restaurant dishes, drinks, and desserts at affordable price. We are glad to offer you the best food in the area to everyone.</p>
                            <Link to='/menu'><button className='orderbutton'>Order Online</button></Link>
                        </div>
                        <img alt='homeimg' src='./images/image3.png'/>
                    </div>
                </Carousel>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='welcomesection'>
                    <h1 className='welcometext'  data-aos='fade-up'>Welcome to Alimente</h1>
                    <p className='carpediemtext'  data-aos='fade-up'>Alimente is the best way to find local restaurants that deliver to you or quickly order food online. Whether looking for breakfast, lunch, dinner or late night snack, we have it all.</p>
                    <div className='ingredient1'>
                        <img alt='homeimg' src='./images/ingredientsimg1.png' data-aos='fade-right' className='ingredientsimg1'/>
                        <div data-aos='fade-left' data-aos-delay='500'>
                            <p className='ingredient1txt1'>Delicious and healthy food</p>
                            <p className='ingredient1txt2'>Our company is engaged in the delivery of healthy and tasty food around the city. Special cooking and delivery technologies allow you to buy fresh and healthy food. Experienced chefs and professional couriers will provide you with a nutritious meal.</p>
                            <Link to='/menu'><button className='viewmenu'  data-aos='fade-up' onClick={()=>window.scrollTo(0,0)}>View Menu</button></Link>
                        </div>
                    </div>
                    <div className='ourservicesection'>
                        <div data-aos='fade-right' data-aos-delay='500'>
                            <p className='servicesectiontxt1'>Our Dedicated Services</p>
                            <p className='servicesectiontxt2'>Our company is engaged in the delivery of healthy and tasty food around the city. Special cooking and delivery technologies allow you to buy fresh and healthy food. Experienced chefs and professional couriers will provide you with a nutritious meal.</p>
                            <Link to='/userprofile'><button className='viewmenu2' data-aos='fade-up' onClick={()=>window.scrollTo(0,0)}>Give Reviews</button></Link>
                        </div>
                        <img alt='homeimg' data-aos='fade-left' src='./images/chef.png' className='chefimg'/>
                    </div>
                </div>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='ourrecommendations'>
                    <p className='ourspecialtxt'>TRY OUR SPECIALS</p>
                    <div className='allspeicals1'>
                        <div className='boxinspecials' data-aos='zoom-in'>
                            <Link to='/menu' style={{textDecoration:'none'}} onClick={()=>[window.scrollTo(0,0),this.props.picclicked('Juicy Momo')]}>
                            <img alt='homeimg' src='./images/momo.png' className='momopic'/>
                            <p className='momoname'>Momo</p>
                            </Link>
                        </div>
                        <div className='boxinspecials' data-aos='zoom-in'>
                            <Link to='/menu' style={{textDecoration:'none'}} onClick={()=>[window.scrollTo(0,0),this.props.picclicked('Sandwich and Burgers')]}>
                            <img alt='homeimg' src='./images/ourspecial2.png' className='recommendedpics'/>
                            <p className='spcialsnames'>Burgers</p>
                            </Link>
                        </div>
                        <div className='boxinspecials' data-aos='zoom-in'>
                            <Link to='/menu' style={{textDecoration:'none'}} onClick={()=>[window.scrollTo(0,0),this.props.picclicked('Italian')]}>
                            <img alt='homeimg' src='./images/ourspecial3.png' className='recommendedpics'/>
                            <p className='spcialsnames'>Pizzas</p>
                            </Link>
                        </div>
                    </div>
                    <div className='allspecials2'>
                        <div className='boxinspecials' data-aos='zoom-in'>
                                <Link to='/menu' style={{textDecoration:'none'}} onClick={()=>[window.scrollTo(0,0),this.props.picclicked('Smoothies')]}>
                            <img alt='homeimg' src='./images/Smoothies.jpg' className='momopic'/>
                            <p className='momoname'>Smoothies</p>
                            </Link>
                        </div>
                        <div className='boxinspecials' data-aos='zoom-in'>
                            <Link to='/menu' style={{textDecoration:'none'}} onClick={()=>[window.scrollTo(0,0),this.props.picclicked('Sandwich and Burgers')]}>
                            <img alt='homeimg' src='./images/ourspecial5.png' className='recommendedpics'/>
                            <p className='spcialsnames'>Sandwiches</p>
                            </Link>
                        </div>
                        <div className='boxinspecials' data-aos='zoom-in'>
                                <Link to='/menu' style={{textDecoration:'none'}} onClick={()=>[window.scrollTo(0,0),this.props.picclicked('Bread Bun and Confectionaries')]}>
                            <img alt='homeimg' src='./images/confectionaries.jpeg' className='momopic'/>
                            <p className='tacosname'>Cakes  </p>
                            </Link>
                        </div>
                    </div>
                </div>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className='reviews'>
                    <p className='reviewertxt'>SOME TOP REVIEWERS</p>        
                    <div className='reviewscroll' data-aos='fade-up'>
                        <Carousel infiniteLoop={true} thumb={false} autoPlay={true} showStatus={false} showArrows={true}>
                            <div className='review'>
                                <div className='personimage'>
                                    <img alt='homeimg' src='./images/reviewer1.jpeg' style={{height:'100%', width: '100%', borderRadius : '50%'}} />
                                    <p className='reviewername'>John Smith</p>
                                </div>
                                <p className='reviewheading'>
                                    Quality Services
                                </p>
                                <p className='reviewdesc'>
                                    I am very grateful to have this service in our city. You make dinner a no-brainer on those crazy/lazy nights. I also wanted you to know that everyone of the delivery people have been the nicest and most polite people.
                                </p>
                            </div>
                            <div>
                                <div className='personimage'>
                                    <img alt='homeimg' src='./images/reviewer2.jpeg' style={{height:'100%', width: '100%', borderRadius : '50%'}} />
                                    <p className='reviewername'>Jane Parez</p>
                                </div>
                                <p className='reviewheading'>
                                    The Best food delivering service
                                </p>
                                <p className='reviewdesc'>
                                    I’d like to acknowledge Food Delivery for their pleasant help today when I called to place a last minute order for a meeting. I struggled with what to order and your team helped with selection and made everything easy for me.
                                </p>
                            </div>
                            <div>
                                <div className='personimage'>
                                    <img alt='homeimg' src='./images/reviewer3.jpeg' style={{height:'100%', width: '100%', borderRadius : '50%'}} />
                                    <p className='reviewername'>Emily Wilson</p>
                                </div>
                                <p className='reviewheading'>
                                    Perfect and Tasty Desserts
                                </p>
                                <p className='reviewdesc'>
                                    Thanks so much for the gorgeous strawberry cake and desserts on Saturday. We loved  that cake - so beautiful and yummy!
                                </p>
                            </div>
                            <div>
                                <div className='personimage'>
                                    <img alt='homeimg' src='./images/reviewer4.jpeg' style={{height:'100%', width: '100%', borderRadius : '50%'}} />
                                    <p className='reviewername'>Jane Lee</p>
                                </div>
                                <p className='reviewheading'>
                                    High Quality Service
                                </p>
                                <p className='reviewdesc'>
                                    Your female employee on the phone was so kind yesterday! She took my order, got it exactly correct; and my food arrived. The delivery man was also very good. The level of service wa also outstanding, thank you!
                                </p>
                            </div>
                        </Carousel>
                    </div>
                </div>  
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */} 
                <div className='howwework'>
                    <p className='itssimple'>
                        IT'S SIMPLE
                    </p>    
                    <p className='weworkingtext' data-aos='fade-up' data-aos-duration='1000'>How are we Working</p>
                    <p className='weworkingtext2' data-aos='fade-up' data-aos-duration='1000'>If you are looking for a reliable and quality food supplier, pay attention to our company. Everything is very simple! You choose the meal plan that suits you, pay, and we deliver your meal.</p>
                    <div className='allcircles'>
                        <div>
                            <div className='circle circlepos1' data-aos='zoom-in' data-aos-delay='500'>
                                <GiMeal className='fa-meal'/>
                            </div>
                            <p className='circletopic crtopic1'>Choose your meals</p>
                            <p className='topicdesc desc1'>We will cook foods for you and pack it for delivery</p>
                        </div>
                        <div>
                            <div className='circle circlepos2' data-aos='zoom-in' data-aos-delay='500'>
                                <MdPayment className='fa-meal'/>
                            </div>
                            <p className='circletopic crtopic2'>Pay for the order</p>
                            <p className='topicdesc desc2'>Take advantage of the weekly tariff plan it is profitable</p>
                        </div>
                        <div>
                            <div className='circle circlepos3' data-aos='zoom-in' data-aos-delay='500'>
                                <FcInTransit className='fa-meal'/>
                            </div>
                            <p className='circletopic crtopic3'>Get deliver hot and fresh</p>
                            <p className='topicdesc desc3'>Delivery within the city within one hour</p>
                        </div>
                        
                    </div>
                </div>    
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}                          
                <div className='loginsection'>
                    <div className='loginforminhomepage' data-aos='flip-right'>
                        <p className='healthymealtxt'>HEALTHY MEAL DELIVERY</p>
                        <p className='signupstepstext'>Just 4 Steps behind your meal!!</p>
                        <p className='formdesctext'>Everything is very simple! Enter your details in the form. Select the desired menu and provide the delivery address. It’s easy!</p>
                        <div className='formdetails'>
                            <input type='text' onChange={(event)=>{this.setState({name : event.target.value})}} className='textformatinform' placeholder='Enter Name' />
                            <input type='text' onChange={(event)=>{this.setState({email : event.target.value})}} className='textformatinform' placeholder='Enter Email' />
                            <input type='password' onChange={(event)=>{this.setState({password : event.target.value})}} className='textformatinform' placeholder='Enter Password' />
                            <input type='text' onChange={(event)=>{this.setState({phonenumber : event.target.value})}} className='textformatinform' placeholder='Enter Phone Number' />
                            <div className='buttonofformdetails'>
                                <button className='formsubmit' onClick={()=>homepagesignup()}>Choose your meal</button>
                                <p className='orbetweenbuttons'>OR</p>
                                <Link to='/signin'><button className='formsubmit' onClick={()=>window.scrollTo(0,0)}>Sign In</button></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img alt='homeimg' src='./images/login.png' className='loginimg' data-aos='fade-right' data-aos-delay='700'/>
                    </div>
                </div>
            </div>
        )
    }
} 
const mapStateToProps = (state) =>{
    return{
        user : state.user_reducer
    }
}
export default connect(mapStateToProps,{signupuser,signinuser,picclicked})(Home) ;

