import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FaUserAlt } from 'react-icons/fa';
 
class Header extends Component{
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
                <Link to='/'><button className='linksinheader' onClick={()=>sendtotop()}>HOME</button></Link>
                <Link to='/aboutus'><button className='linksinheader' onClick={()=>sendtotop()}>ABOUT US</button></Link>
                <Link to='/menu'><button className='linksinheader' onClick={()=>sendtotop()}>MENU</button></Link>
                <Link to='/gallery'><button className='linksinheader' onClick={()=>sendtotop()}>GALLERY</button></Link>
                <Link to='/contact'><button className='linksinheader' onClick={()=>sendtotop()}>CONTACT US</button></Link>
                <Link to='/signin'><FaUserAlt className='linksinheader userlogo' onClick={()=>sendtotop()}/></Link>
            </div>
        </div>
    )
    }
}
export default Header;
