import React from 'react';
import './userdetails.css';
import { FaUserAlt } from 'react-icons/fa';

const Userdetails = (props) =>{
    return(
        <div className='userdetails'>
            <div className='userimage'><FaUserAlt className='userimagelogo'/></div>
            <div className='nameofuser belowimage'>
                {props.user.login.name}
            </div>
            <div className='userinfo'>
                <div className='nameofuser'>
                    <p style={{color : '#000000'}}>Email: {props.user.login.email}</p>
                </div>
                <div className='nameofuser'>
                    <p style={{color : '#000000'}}>Mobile: {props.user.login.phonenumber}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Userdetails;