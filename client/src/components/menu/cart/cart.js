import React, { Component } from 'react';
import './cart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {connect} from 'react-redux';
import {checkisauth} from '../../../actions';
import {cartorder} from '../../../actions';

import Cookies from 'universal-cookie';
const cookies = new Cookies()


class Cart extends Component{
    state = {
        cart : [],
        debit : false,
        credit : false,
        online : false,
        COD : false
    }
    componentWillMount(){
        if(cookies.get('rescart')){
            this.setState({
                cart : [...cookies.get('rescart')]
            })
        }
        this.props.checkisauth()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.user.orders){
            if(nextProps.user.orders.orderconfirm){
                cookies.remove('rescart')
                window.location.href = '/userprofile'
            }
        }
    }
    render(){
    const buy = () =>{
        if(this.state.COD){
            if(this.props.user.login.loginauth){
                const userid = this.props.user.login.userid
                const totalprice = withtaxbill()
                const fooddetail = []
                this.state.cart.map((each)=>{
                    let oneset = {}
                    oneset['foodname'] = each.items[0]
                    oneset['foodquantity'] = each.total
                    oneset['foodprice'] = each.total * each.items[1]
                    fooddetail.push(oneset)
                })
                this.props.cartorder(userid, fooddetail, totalprice)
            }else{
                alert('Please login first')
                window.location.href = '/signin'
            }
        }else{
            alert('Please select the payment method as COD')
        }
    }
    const reduceitem = (item) =>{
        const updated = this.state.cart
        if(item['total'] === 1){
            const removeditem = []
            updated.map((each)=>{
                if(each['items'][0] != item['items'][0]){
                    removeditem.push(each)
                }else{
                    return
                }
            })
            this.setState({
                cart : removeditem
            })
            if(removeditem.length === 0){
                cookies.remove('rescart')
            }else{
                cookies.set('rescart',this.state.cart)
            }
        }else{
            updated.map((each)=>{
                let flag = 0
                if(each['items'][0] === item['items'][0]){
                    each['total'] = Number(each['total']) - 1
                    flag = 1
                }
                if(flag = 1){
                    return
                }
            })
            this.setState({
                cart : updated
            })
            cookies.set('rescart',this.state.cart)
        }
    }
    const increaseitem = (item) =>{
        const updated = this.state.cart
        updated.map((each)=>{
            let flag = 0
            if(each['items'][0] === item['items'][0]){
                each['total'] = Number(each['total']) + 1
                flag = 1
            }
            if(flag = 1){
                return
            }
        })
        this.setState({
            cart : updated
        })
        cookies.set('rescart',this.state.cart)
    }
    const totalbill = () =>{
        let total = 0
        this.state.cart.map((each)=>{
            total = total + (each['items'][1] * each['total'])
        })
        return total
    }
    const withtaxbill = () =>{
        let total = 0
        this.state.cart.map((each)=>{
            total = total + (each['items'][1] * each['total'])
        })
        total = Number(total) + Number(total)*13/100
        return total
        // console.log(total)
    }
    return(
        <div className='cartpage'>
            <div className='cartsection'>
                {
                    this.state.cart.length === 0 ?
                    <h1 className='emptycart'>Cart is Empty</h1>
                    :
                    <div>
                        <h1 className='emptycart'><AiOutlineShoppingCart/></h1>
                        <div className='cartdetails'>
                            {this.state.cart.map((each)=>{
                                return(
                                    <div className='eachitembox' key={each['items'][0]}>
                                        <div className='displaynameandprice'>
                                        <p className='itemnameinbox'>{each['items'][0]}</p>
                                        <br/>
                                        <p className='itempriceinbox'>Rs. {each['items'][1]}</p>
                                        </div>
                                        <div className='buttonforeachitem'>
                                            <button className='buttonsincartsection' onClick={()=>reduceitem(each)}>-</button>
                                            <label className='txtbtwbtn'>{each['total']}</label>
                                            <button className='buttonsincartsection' onClick={()=>increaseitem(each)}>+</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
            {
                cookies.get('rescart') === undefined ? 
                null
                :
                <div className='paymentsection'>
                <h3 className='paymenttxt'>Payment options</h3>
                <div className='paymentoptions'>
                    <div className='chooseoptions'>
                        <input type='radio' onChange={()=>alert('Only COD is Available for now')} checked={this.state.debit}/><lable>Debit Card</lable>
                    </div>
                    <div className='chooseoptions'>
                        <input type='radio' onChange={()=>alert('Only COD is Available for now')} checked={this.state.credit}/><lable>Credit Card</lable>
                    </div>
                    <div className='chooseoptions'>
                        <input type='radio' onChange={()=>alert('Only COD is Available for now')} checked={this.state.online}/><lable>Online Banking</lable>
                    </div>
                    <div className='chooseoptions'>
                        <input type='radio' onChange={()=>this.setState({COD : true})}/><lable>Cash On Delivery (COD)</lable>
                    </div>
                </div>
                <div className='bill'>
                    <p className='billtxt'>Your Bill:<br/> Rs.{totalbill()}</p>
                    <p className='billtxt'>Tax: 13%</p>
                    <p className='billtxt'>Total Bill: Rs.{withtaxbill()}</p>
                </div>
                <button className='buybutton' onClick={()=>buy()}>Buy</button>
            </div>
            }
        </div>
    )
    }
}
const mapStateToProps = (state) =>{
    return {
        user : state.user_reducer
    }
}
export default connect(mapStateToProps,{checkisauth,cartorder})(Cart)