import React from 'react';
import './userdetails.css';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'
import {FcPhoneAndroid} from 'react-icons/fc'
import {MdLocationOn} from 'react-icons/md'
import { Component } from 'react';
import {connect} from 'react-redux';
import {changepassword,logoutuser,editdetails} from '../../../actions';


class Userdetails extends Component{
    state = {
        changepassword : false,
        editaddress : false,
        oldpassword : '',
        newpassword : '',
        newpassword2 : '',
        phone : '',
        address : ''
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user.editdetails){
            if(nextProps.user.editdetails.detailsupdated){
                alert(nextProps.user.editdetails.message)
                window.location.reload()
            }else{
                alert(nextProps.user.editdetails.message)
            }
        }else if(nextProps.user.passwordchanged){
            if(nextProps.user.passwordchanged.passwordupdated){
                this.props.logoutuser()
            }else{
                alert(nextProps.user.passwordchanged.message + ' This Page will reload')
                window.location.reload()
            }
        }
    }
    editdetails = (event) =>{
        event.preventDefault()
        if(String(this.state.phone).length != 10){
            alert('Invalid Phone Number')
        }else{
            console.log(this.state.phone, String(this.state.address))
            this.props.editdetails(this.state.phone, String(this.state.address))
        }
    }
    reqchangepassword = (event) =>{
        event.preventDefault()
        if(this.state.oldpassword === '' ||
        this.state.newpassword === '' ||
        this.state.newpassword2 === ''){
            alert('Please fill the form complete')
        }else if(this.state.newpassword != this.state.newpassword2){
            alert('New Password donot match')
        }else if(this.state.oldpassword === this.state.newpassword2){
            alert('New Password cannot be Old Password')
        }else{
            this.props.changepassword(this.state.oldpassword, this.state.newpassword)
        }
    }
    componentWillMount(){
        if(this.props.user){
            this.setState({
                phone : this.props.user.login.phonenumber,
                address : this.props.user.login.address ? this.props.user.login.address : ''
            })
        }
    }
    render(){
        
       return(
            <div className='userdetails'>
                {
                    this.state.changepassword === false && this.state.editaddress === false ? 
                    <div>
                        <div className='userimage' data-aos='fade-up'><FaUserAlt className='userimagelogo'/></div>
                        <div className='belowimage' data-aos='fade' data-aos-delay='500' data-aos-duration='1000'>
                            {this.props.user.login.name}
                        </div>
                        <div className='userinfo'>
                            <div className='nameofuser' data-aos='fade-dowm' data-aos-delay='1000' data-aos-duration='500'>
                                <p style={{color : '#000000'}}><AiOutlineMail className='iconuserdetail'/> {this.props.user.login.email}</p>
                            </div>
                            <div className='nameofuser' data-aos='fade-dowm' data-aos-delay='1300' data-aos-duration='500'>
                                <p style={{color : '#000000'}}><FcPhoneAndroid className='iconuserdetail'/> {this.props.user.login.phonenumber}</p>
                            </div>
                            <div className='nameofuser' data-aos='fade-dowm' data-aos-delay='1600' data-aos-duration='500'>
                                <p style={{color : '#000000'}}><MdLocationOn className='iconuserdetail'/> {this.props.user.login.address}</p>
                            </div>
                        </div>
                        <div className='buttonsinuserdetails' data-aos='fade-up' data-aos-delay='1600'>
                            <button className='chngpswdbtn' onClick={()=>this.setState({changepassword : true})}>Change Password</button>
                            <button className='chngpswdbtn' onClick={()=>this.setState({editaddress : true})}>Edit Details</button>
                            <button className='chngpswdbtn'>Delete Account</button>
                        </div>
                    </div>
                    :
                    this.state.changepassword === true ? 
                    <div className='change password'>
                        <div className='formchangepassword' data-aos='zoom-in'>
                            <button className='passwordcrossbutton' onClick={()=>[this.setState({changepassword : false}),window.scrollTo(0,0)]}>X</button>
                            <p className='signinalimento alimentepass'>Alimente</p>
                            <p className='chngpswrdtxt'>Change Password</p>
                            <input type='password' className='newpassword' placeholder='Old Password' onChange={(event)=>this.setState({oldpassword : event.target.value})}/>
                            <input type='password' className='newpassword newpassmobile' placeholder='New Password' onChange={(event)=>this.setState({newpassword : event.target.value})}/>
                            <input type='password' className='newpassword newpassmobile' placeholder='New Password' onChange={(event)=>this.setState({newpassword2 : event.target.value})}/>
                            <button onClick={(event)=>this.reqchangepassword(event)} className='newpasssbtn'>Submit</button>
                        </div>
                    </div>
                    :
                    this.state.editaddress === true ? 
                    <div>
                        <div className='change password'>
                        <div className='formdetailsepassword' data-aos='zoom-in' >
                            <button className='passwordcrossbutton' onClick={()=>[this.setState({editaddress : false}),window.scrollTo(0,0)]}>X</button>
                            <p className='signinalimento alimentepass'>Alimente</p>
                            <p className='chngpswrdtxt'>Edit Details</p>
                            <p className='newpassword lgineml'>{this.props.user.login.email}</p>
                            <input type='text' className='newpassword newpassmobile' value={this.state.phone} placeholder='Phone Number' onChange={(event)=>this.setState({phone : event.target.value})}/>
                            <input type='text' className='newpassword newpassmobile' value={this.state.address} placeholder='Address' onChange={(event)=>this.setState({address : event.target.value})}/>
                            <button onClick={(event)=>this.editdetails(event)} className='newpasssbtn'>Submit</button>
                        </div>
                    </div>
                    </div>
                    : 
                    null
                }
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        user : state.user_reducer
    }
}
export default connect(mapStateToProps,{changepassword, logoutuser,editdetails})(Userdetails);