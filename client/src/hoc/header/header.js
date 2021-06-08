import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FaUserAlt } from 'react-icons/fa';
 
class Header extends Component{
    state = {
        home : false,
        aboutus : false,
        menu : false,
        gallery : false,
        contactus : false
    }
    componentWillMount(){
        if(window.location.pathname === '/'){
            this.setState({
                home : true, aboutus : false, menu : false, gallery : false,
                contactus : false
            })
        }else if(window.location.pathname === '/aboutus'){
            this.setState({
                home : false, aboutus : true, menu : false, gallery : false,
                contactus : false
            })
        }else if(window.location.pathname === '/menu'){
            this.setState({
                home : false, aboutus : false, menu : true, gallery : false,
                contactus : false
            })
        }else if(window.location.pathname === '/gallery'){
            this.setState({
                home : false, aboutus : false, menu : false, gallery : true,
                contactus : false
            })
        }else if(window.location.pathname === '/contact'){
            this.setState({
                home : false, aboutus : false, menu : false, gallery : false,
                contactus : true
            })
        }
    }
    render(){
    const sendtotop = () =>{
        window.scroll(0,0)
    }
    return(
        <div className='headerbodyformat'>
            <Link to='/' className='logo'>
                <div className='alimentelogo'>
                    Alimente
                </div>
            </Link>
            <div className='headerlinks'>
                <Link to='/'><button className='linksinheader' style={{borderBottom : this.state.home === true ? '2px solid #eeb809' : 'none'}} 
                onClick={()=>[this.setState({
                    home : true, aboutus : false, menu : false, gallery : false,
                    contactus : false
                }),sendtotop()]}>
                    HOME
                </button>
                </Link>
                <Link to='/aboutus'><button className='linksinheader' style={{borderBottom : this.state.aboutus === true ? '2px solid #eeb809' : 'none'}} 
                onClick={()=>[this.setState({
                    home : false, aboutus : true, menu : false, gallery : false,
                    contactus : false
                }),sendtotop()]}>
                    ABOUT US
                </button></Link>
                <Link to='/menu'><button className='linksinheader' style={{borderBottom : this.state.menu === true ? '2px solid #eeb809' : 'none'}} 
                onClick={()=>[this.setState({
                    home : false, aboutus : false, menu : true, gallery : false,
                    contactus : false
                }),sendtotop()]}>
                MENU
                </button></Link>
                <Link to='/gallery'><button className='linksinheader' style={{borderBottom : this.state.gallery === true ? '2px solid #eeb809' : 'none'}} 
                onClick={()=>[this.setState({
                    home : false, aboutus : false, menu : false, gallery : true,
                    contactus : false
                }),sendtotop()]}>
                GALLERY
                </button></Link>
                <Link to='/contact'><button className='linksinheader' style={{borderBottom : this.state.contactus === true ? '2px solid #eeb809' : 'none'}} 
                onClick={()=>[this.setState({
                    home : false, aboutus : false, menu : false, gallery : false,
                    contactus : true
                }),sendtotop()]}>
                CONTACT US
                </button></Link>
                <Link to='/signin'><FaUserAlt className='linksinheader userlogo'  
                onClick={()=>[this.setState({
                    home : false, aboutus : false, menu : false, gallery : false,
                    contactus : false
                }),sendtotop()]}
                />
                </Link>
            </div>
        </div>
    )
    }
}
export default Header;
