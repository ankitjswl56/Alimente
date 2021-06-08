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
                <div className='contactusform' data-aos='flip-down' data-aos-delay='300'>
                    <p className='contactustext'>Contact Us</p>
                    <p className='formmsg'>Get in touch by sending us an email using the form below.</p>
                    <form className='contactform' onSubmit={(event)=>Contactformsubmit(event)}>
                        <div>
                            <input type='text' onChange={(event)=>this.setState({firstname : event.target.value})} className='contactfirstName' placeholder='Enter First Name'/>
                            <input type='text' onChange={(event)=>this.setState({lastname : event.target.value})} className='contactfirstName' placeholder='Enter Second Name'/>
                            <input type='text' onChange={(event)=>this.setState({email : event.target.value})} className='contactfirstName' placeholder='Enter Email'/>
                            <input type='text' onChange={(event)=>this.setState({phonenumber : event.target.value})} className='contactfirstName' placeholder='Enter Phone Number'/>
                        </div>
                        <div className='contactlast3'>
                            <textarea onChange={(event)=>{this.setState({message : event.target.value})}} className='contactMessage'></textarea>
                        </div>
                        <button className='contactsendbutton' type='submit'>Send</button>
                    </form>
                </div>
                <div className='orincontactus' data-aos='fade-up'>
                    <p className='ortext'>Or,</p>
                </div>
                <div className='visitussection' data-aos='fade-right' data-aos-delay='500' data-aos-duration='700'>
                    <p className='visitustext'>Visit us</p>
                    <p className='hosttxt'>We are located in Biratnagar, and we would love to host you here.</p>
                    <div className='tablediv'>
                        <table className='timingtable'>
                            <tr>
                                <th className='tdborder'>Opening</th>
                                <th className='tdborder'>Closing</th>
                            </tr>
                            <tr>
                                <td className='tdborder'>11:00 AM</td>
                                <td className='tdborder'>9:00 PM</td>
                            </tr>
                        </table>
                    </div>
                </div>
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