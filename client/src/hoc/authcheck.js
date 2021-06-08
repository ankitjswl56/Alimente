import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkisauth } from '../actions';
import './layout.css';

export default function(ComposedClass, isallowed){
    class Authcheck extends Component{
        state = {
            loading : true
        }
        componentWillMount(){
            this.props.checkisauth()
        }
        componentWillReceiveProps(nextProps){
            if(!nextProps.user.login.loginauth){
                this.setState({loading : false})
                if(isallowed){
                    this.props.history.push('/signin')
                }
            }else{
                this.setState({loading : false})
                if(isallowed===false){
                    this.props.history.push('/userprofile')
                }
            }
        }
        render(){
            if(this.state.loading === true){
                return (
                <div className='loadingpage'>
                    <h1 className='loadingtxt'>Loading...</h1>
                </div>
                )
            }
            return(
                <ComposedClass user={this.props.user} sectionnname={ComposedClass}/>
            )
        }
    }
    const mapStateToProps = (state) =>{
        return {
            user : state.user_reducer
        }
    }
    return connect(mapStateToProps,{checkisauth})(Authcheck)

}