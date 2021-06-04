import React, { Component } from 'react';
import './resetpassword.css';
import {connect} from 'react-redux';
import {resetpassword, resetpasswordwithcode} from '../../../actions';

class Resetpassword extends Component{
    state={
        email : '',
        resetcodesent : false,
        usercode : '',
        newpassword : '',
        confirmnewpassword : ''
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user){
            if(!this.state.resetcodesent){
                if(nextProps.user.codeadded){
                    alert('A code has been sent to your Email. Use the code to reset your password')
                    this.setState({
                        resetcodesent : true
                    })
                }else{
                    alert(`Something went wrong. ${nextProps.codeadded.message}`)
                }
            }else{
                if(nextProps.user.passwordupdated){
                    if(nextProps.user.passwordupdated.passwordupdate){
                        alert('Password Successfully Changed')
                        window.location.href = '/signin'
                    }else{
                        alert(`Something went wrong. ${nextProps.user.passwordupdated.message}`)
                    }
                }
            }
        }
    }
    resetpasswordsubmit = (event) =>{
        event.preventDefault()
        if(this.state.email === ''){
            alert('Please enter an email')
        }else if(!this.state.email.includes('@') || !this.state.email.includes('.com')){
            alert('Please enter valid email')
        }else{
            this.props.resetpassword(this.state.email)
        }
    }
    codesubmit = (event) =>{
        event.preventDefault()
        if(this.state.usercode === '' ||
            this.state.newpassword === '' ||
            this.state.confirmnewpassword === ''
        ){
            alert('Please fill the form complete.')
        }else if(this.state.newpassword != this.state.confirmnewpassword){
            alert('Password do not match')
        }else{
            this.props.resetpasswordwithcode(this.state.usercode, this.state.newpassword, this.state.email)
        }
    }
    render(){ 
        return(
            !this.state.resetcodesent ?
            <div className='resetpasswordpage'>
                <form className='resetpasswordform' onSubmit={(event)=>this.resetpasswordsubmit(event)} data-aos='zoom-in'>
                    <p className='signinalimentoinreset'>Alimente</p>
                    <div>
                        <input type='text' onChange={(event)=>this.setState({email :event.target.value})} placeholder='Enter Email' className='resetemail'/>
                    </div>
                    <button type='submit' className='resetpasswordbutton'>Submit</button>
                </form>     
            </div>
            :
            <div className='resetpasswordpage'>
                <form className='resetpasswordform codeform' onSubmit={(event)=>this.codesubmit(event)} data-aos='zoom-in'>
                    <p className='signinalimentoinreset codealimente'>Alimente</p>
                    <div>
                        <input type='text' value={this.state.usercode} onChange={(event)=>this.setState({usercode :event.target.value})} placeholder='Enter Your Code' className='resetemail codeusercode'/>
                    </div>
                    <div>
                        <input type='password' onChange={(event)=>this.setState({newpassword :event.target.value})} placeholder='Enter New Password' className='resetemail codenewpass'/>
                    </div>
                    <div>
                        <input type='password' onChange={(event)=>this.setState({confirmnewpassword :event.target.value})} placeholder='Confirm New Password' className='resetemail codeconfirmpass'/>
                    </div>
                    <button type='submit' className='resetpasswordbutton codesubmit'>Submit</button>
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
export default connect(mapStateToProrps,{resetpassword,resetpasswordwithcode})(Resetpassword);