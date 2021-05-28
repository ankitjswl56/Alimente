import React from 'react';
import './userdetails.css';
import { FaUserAlt } from 'react-icons/fa';

const Userdetails = (props) =>{
    return(
        <div className='userdetails'>
            <div className='userimage'><FaUserAlt className='userimagelogo'/></div>
            <div className='nameofuser belowimage'>
                {props.user.login.name ? props.user.login.name : props.user.login.email}
            </div>
            <div className='userinfo'>
                <div className='nameofuser details'>
                    Your Details:
                </div>
                <div className='nameofuser'>
                    <label style={{color : '#000000'}}>Name: </label>{props.user.login.name ? props.user.login.name : props.user.login.email}
                </div>
                <div className='nameofuser'>
                    <label style={{color : '#000000'}}>Email: </label>{props.user.login.email}
                </div>
                <div className='nameofuser'>
                    <label style={{color : '#000000'}}>Phone Number: </label>{props.user.login.phonenumber}
                </div>
                <div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Userdetails;