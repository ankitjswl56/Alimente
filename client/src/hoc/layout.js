import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import './layout.css';

const Layout = (props) =>{
    return (
        <div className='layout'>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
export default Layout;