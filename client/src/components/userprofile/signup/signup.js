import React, { Component } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { signupuser } from '../../../actions';

class Signup extends Component{
    state = {
        name : '',
        email : '',
        password : '',
        phonenumber : ''
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.loginauth){
            window.location.href = '/userprofile'
        }else if(nextProps.user.login.message){
            alert(nextProps.user.login.message)
        }
        
    }
    render(){
        const submitsignupdetails = (event) =>{
            event.preventDefault()
            if(this.state.name === '' ||
            this.state.email === '' ||
            this.password === '' ||
            this.phonenumber === ''){
                alert('Please fill the form completely')
            }else if(!this.state.email.includes('@') || 
                this.state.email.slice(this.state.email.length-4) != '.com'
            ){
                console.log(this.state.email)
                alert('Please enter valid email')
            }else if(this.state.password.length<4){
                alert('Password should be atleast 4 characters')
            }else if(this.state.phonenumber.length < 10 || this.state.phonenumber.length > 10){
                alert('Please insert valid phonenumber')
            }
            else{
                this.props.signupuser(this.state.name, this.state.email, this.state.password, this.state.phonenumber)
            }

        }
        return(
            <div className='signuppage'>
                <form className='loginform' onSubmit={(event)=>submitsignupdetails(event)} data-aos='zoom-in'>
                    <label className='singupalimento'>Alimente</label>
                    <div className='formdetailssection'>
                        <input type='text' onChange={(event)=>this.setState({name : event.target.value})} placeholder='Name' className='loginname'/>
                        <input type='text' onChange={(event)=>this.setState({email : event.target.value})} placeholder='Email' className='loginname'/>
                        <input type='password' onChange={(event)=>this.setState({password : event.target.value})} placeholder='Password' className='loginname'/>
                        <input type='text' onChange={(event)=>this.setState({phonenumber : event.target.value})} placeholder='Phone Number' className='loginname'/>
                        <div className='buttonsinform'>
                            <button className='buttoninsignuppage' onClick={(event)=>submitsignupdetails(event)}>Sign up</button>
                            <p className='ortxtinsignup'>OR</p>
                            <Link to='/signin'><button className='buttoninsignuppage'>Sign in</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        user : state.user_reducer
    }
}
export default connect(mapStateToProps,{signupuser})(Signup)