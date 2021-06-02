import React, { Component } from 'react';
import './dashboard.css';
import { HiHome } from 'react-icons/hi';
import {connect} from 'react-redux';
import {fetchorders} from '../../../actions'

class Dashboard extends Component{
    state = {
        userorders : []
    }
    componentWillMount(){
        this.props.fetchorders()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.userorders.userorders){
            this.setState({userorders : nextProps.userorders.userorders.details.reverse()})
        }
    }
    render(){
        return(
            <div>
                <div>
                    <div className='dashboarddiv'>
                        <HiHome className='dashboardtxt' style={{fontSize : '2.2vw'}}/>
                        <h2 className='dashboardtxt'>Dashboard</h2>         
                    </div>
                    <div className='dashboard'>
                        <div className='allorders'>
                            {
                                this.state.userorders.length === 0 ?
                                <div>
                                    <p className='lonelydashboard'>The Dashboard is lonely here. Please order.</p>
                                </div>
                                :
                                <div>
                                    <div className='heading'>
                                        <p className='headingname'>Name</p>
                                        <p className='headingquantity'>Quantity</p>
                                        <p className='headingprice'>Price</p>
                                    </div>
                                    <div className='allordersinside'>
                                    {this.state.userorders.map((each)=>{
                                        return (
                                            <div className='eachordereddetails' key={each._id}>
                                            {
                                            each.fooddetail.map((eachone)=>{
                                            return(
                                                <div className='ordereddetail' key={eachone._id}>
                                                    <p className='stringinsideordereddetail'>{eachone.foodname}</p>
                                                    <p className='quaninsideordereddetail'>{eachone.foodquantity}</p>
                                                    <p className='numinsideordereddetail'>Rs. {parseFloat(eachone.foodprice).toFixed(2)}</p>
                                                </div>
                                                )
                                            })
                                            }
                                            <p className='eachtotalprice'>Total: Rs. {parseFloat(each.totalprice).toFixed(2)}</p>
                                            </div>
                                        )
                                    })}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        userorders : state.user_reducer
    }
}
export default connect(mapStateToProps,{fetchorders})(Dashboard);