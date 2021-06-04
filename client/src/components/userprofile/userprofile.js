import React, { Component } from 'react';
import './userprofile.css';
import { connect } from 'react-redux';
import { logoutuser,fetchorders } from '../../actions';
import Dashboard from './dashboard/dashboard';
import Userdetails from './userdetails/userdetails';
import {BiLogOut} from 'react-icons/bi';
import {GrDeliver} from 'react-icons/gr'
import {BiUserCircle} from 'react-icons/bi'
 
class UserProfile extends Component{
    state = {
        orders : true,
        userprofile : false,
        userorders : []
    }
    componentWillMount(){
        this.props.fetchorders()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user.userorders){
            this.setState({
                userorders : nextProps.user.userorders.details
            })
        }
    }
    render(){
        const logoutuser = () =>{
            this.props.logoutuser()
        }
        const orderbuttonclicked = () =>{
            this.setState({orders : true,userprofile : false})
        } 
        const userprofileclicked = () =>{
            this.setState({userprofile : true,orders : false})
        }
        return(
            <div className='userprofile'>
                <div className='usersection'>
                    <div className='buttonsdiv'>
                        <div className='userlogoinprofile'>
                            <BiUserCircle/>
                        </div>
                        <button onClick={()=>orderbuttonclicked()} className='eachbutton logoutbutton'>
                            <GrDeliver/>
                        </button>
                        <button onClick={()=>userprofileclicked()} className='eachbutton logoutbutton'>
                            <BiUserCircle/>
                        </button>
                        <button onClick={()=>{logoutuser()}} className='eachbutton logoutbutton'>
                            <BiLogOut/>
                        </button>
                    </div>
                    <div className='dashboardsection'>
                        {this.state.orders ? 
                        <div>
                            <p className='dashboardof'></p>
                        <Dashboard userorders={this.state.userorders}/>
                        </div>
                        
                        :   
                        ''}
                        {
                            this.state.userprofile ? 
                            <Userdetails user={this.props.user}/>
                            :
                            ''
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        user : state.user_reducer
    }
}
export default connect(mapStateToProps,{fetchorders,logoutuser})(UserProfile);