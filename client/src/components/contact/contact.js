import React, { Component } from 'react';
import './contact.css';
import {connect} from 'react-redux';
import {contactusform} from '../../actions';

class Contact extends Component{
    state = {
        firstname : '',
        lastname : '',
        email : '',
        phonenumber : '',
        message : ''
    }
    render(){
        const Contactformsubmit = (event) =>{
            event.preventDefault()
            if(this.state.firstname === '' ||
            this.state.firstname === '' ||
            this.state.lastname === '' ||
            this.state.email === '' ||
            this.state.phonenumber === '' ||
            this.state.message === '' 
            ){
                alert('Please fill the form completely')
            }else{
                this.props.contactusform(
                    this.state.firstname,
                    this.state.lastname,
                    this.state.email,
                    this.state.phonenumber,
                    this.state.message
                )
                if(this.props.message.messagesent){
                    alert('Your message is sent successfully')
                }else{
                    alert(`Something error occurred: ${this.props.message.message}`)
                }
            }
        }
        return (
            <div className='contactus'>
                <label className='contactustext'>Contact Us</label>
                <p className='formmsg'>Get in touch by sending us an email using the form below.</p>
                <form className='contactform' onSubmit={(event)=>Contactformsubmit(event)}>
                    <div style={{display:'inline-flex'}}>
                        <input type='text' onChange={(event)=>this.setState({firstname : event.target.value})} className='contactfirstName' placeholder='Enter First Name'/>
                        <input type='text' onChange={(event)=>this.setState({lastname : event.target.value})} className='contactfirstName' placeholder='Enter Second Name'/>
                    </div>
                    <br/>
                    <div className='contactlast3'>
                        <input type='text' onChange={(event)=>this.setState({email : event.target.value})} className='contactEmail' placeholder='Enter Email'/>
                        <input type='text' onChange={(event)=>this.setState({phonenumber : event.target.value})} className='contactEmail' placeholder='Enter Phone Number'/>
                        <textarea onChange={(event)=>{this.setState({message : event.target.value})}} className='contactMessage'></textarea>
                    </div>
                    <button className='contactsendbutton' type='submit'>Send</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        message : state.user_reducer.contactusform
    }
}
export default connect(mapStateToProps,{contactusform})(Contact);