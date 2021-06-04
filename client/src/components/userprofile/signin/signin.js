import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signinuser } from '../../../actions';
import './signin.css';

class Signin extends Component{
    state = {
        email : '',
        password : ''
    }
    componentWillReceiveProps(nextProps){
       if(nextProps.user.login.loginauth){
           window.location.href = '/userprofile'
        }else if(nextProps.user.login.message){
            alert(nextProps.user.login.message)
        }
    }
    render(){
        const singinnewuser = (event) =>{
            event.preventDefault()
            if(this.state.email === '' || this.state.password === ''){
                alert('Please fill the form complete')
            }else{
                this.props.signinuser(this.state.email, this.state.password)
            }
        }
        return(
            <div className='signinpage'>
                <form className='signinforminsigninpage' onSubmit={(event)=>singinnewuser(event)} data-aos='zoom-in'>
                    <p className='signinalimento'>Alimente</p>
                    <div>
                        <input type='text' onChange={(event)=>this.setState({email : event.target.value})} placeholder='Email' className='signinloginname'/>
                        <input type='password' onChange={(event)=>this.setState({password: event.target.value})} placeholder='Password' className='signinloginname'/>
                        <div>
                            <Link to='/resetpassword'>
                                <p className='forgetpassword'>Forget password ?</p>
                            </Link>
                        </div>
                        <div className='buttonsinform'>
                            <button className='signinbuttoninsignin' type='submit' onClick={(event)=>singinnewuser(event)}>Sign in</button>
                            <p className='ortxt'>OR</p>
                            <Link to='/signup'><button className='signinbuttoninsignin'>Sign up</button></Link>
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}
const mapStateToProrps = (state) =>{
    return{
        user : state.user_reducer
    }
}
export default connect(mapStateToProrps,{signinuser})(Signin)