import React from 'react';
import { Component } from 'react';
import './cart.css';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import {connect} from 'react-redux';
import {cartorder} from '../../../actions';

const cookies = new Cookies()

class Cart extends Component{
    state = {
        cart : [],
        checkoutbutton : false,
        otherpay : false,
        cod : false
    }
    componentWillMount(){
        if(cookies.get('rescart')){
            this.setState({
                cart : [...cookies.get('rescart')]
            })
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.user){
            if(nextProps.user.orders.orderconfirm){
                cookies.remove('rescart')
                window.location.href = '/userprofile'
            }else{
                alert(nextProps.user.orders.message)
            }
        }
    }
    render(){
        const increaseincart = (items) =>{
            let rescart = this.state.cart    
            let flag = 0
            for(let i of rescart){
                if(i === items){
                    i['quantity'] = i['quantity'] + 1
                    flag = 1
                    break
                }
            }
            if(flag === 0){
                items['quantity'] = 1
                rescart.push(items)
            }
            cookies.set('rescart',rescart)
            this.setState({
                cart : [...rescart]
            })
        }
        const decreaseincart = (items) =>{
            let rescart = this.state.cart
            let flag = 0
            for(let i of rescart){
                if(i === items){
                    if(i[`quantity`] > 1){
                        i['quantity'] = i['quantity'] - 1
                        flag = 1
                        break
                    }
                }
            }
            if(flag === 0){
                rescart = (rescart.filter((Each)=>{return Each.name != items.name}))
            }
            cookies.set('rescart',rescart)
            this.setState({
                cart : [...rescart]
            })
        }
        const totalbill = () =>{
            let total = 0
            this.state.cart.map((each)=>{
                return total = total + (each.price * each.quantity)
            })
            return total
        }
        const buyfood = () =>{
            if(this.state.cod){
               if(this.props.login){
                   if(this.props.login.loginauth){
                        let fooddetails = []
                        for(let i of this.state.cart){
                            fooddetails.push({
                                foodname : i.name,
                                foodprice : i.price,
                                foodquantity : i.quantity
                            })
                        }
                        this.props.cartorder(this.props.login.userid,this.props.login.email,fooddetails, (totalbill() + (totalbill() * 13/100)))
                   }else{
                       alert('Please signin first')
                       window.location.href = '/signin'
                   }
               }
            }else{
                alert('Please select the payment option first')
            }
        }
        return(
            <div className='cartpage'>
                <div style={{pointerEvents : this.state.checkoutbutton ? 'none' : null, opacity : this.state.checkoutbutton ? '0.2' : null}}>
                    <Link to='/menu'><button className='backbutton'>Back</button></Link>
                    <p className='carttxt'>Your Cart</p>
                    <div className='cartbox' data-aos='fade-up'>
                        {
                            this.state.cart.length > 0 ?
                            <div>
                                <div className='headingincart'>
                                    <p className='headingnameincart'>Name</p>
                                    <p className='headingquantityincart'>Quantity</p>
                                    <p className='headingpriceincart'>Price</p>
                                </div>
                                <div className='cartboxinside'>
                                    {this.state.cart.map((each,i)=>{
                                        return(
                                            <div className='eachitem' key={each.name}>
                                                <p className='numbersforitems'>{i+1}.</p>
                                                <div className='itemnameandprice'>
                                                    <p className='itemname'>{each.name}</p>
                                                    <p className='itemprice'>Rs. {each.price}</p>
                                                </div>
                                                <button className='buttonincart' onClick={()=>decreaseincart(each)}><p style={{fontSize: '1.8vw'}}>-</p></button>
                                                <p className='itemquantity'>{each.quantity}</p>
                                                <button className='buttonincart' onClick={()=>increaseincart(each)}><p style={{fontSize: '1.8vw'}}>+</p></button>
                                                <p className='totalpriceforeach'>Rs. {each.price * each.quantity}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                
                            </div>
                            :
                            <p className='carttxt emptycarttxt' style={{color:'#000000'}}>Please select your food first</p>
                        }
                    </div>
                    <div className='checkoutbox'>
                        {this.state.cart.length > 0 ?
                        <div>
                            <p className='carttxt yourbill'>Your bill</p>
                            <div className='billdetails'>
                            <div className='totalbilldiv'>
                                <p className='totalbill'>Total:</p>
                                <p className='totalbillnum'>Rs. {parseInt(totalbill()).toFixed(2)}</p>
                            </div>
                            <div className='totalbilldiv'>
                                <p className='totalbill'>Tax:</p>
                                <p className='totalbillnum'>13%</p>
                            </div>
                            <div className='totalbilldiv'>
                                <p className='totalbill'>Total Amount:</p>
                                <p className='totalbillnum'>Rs. {parseInt(totalbill() + (totalbill() * 13/100)).toFixed(2)}</p>
                            </div>
                            </div>
                            <button className='checkoutbutton' onClick={()=>[this.setState({checkoutbutton : true}),window.scrollTo(0,0)]}>Check Out</button>
                        </div>
                        :
                        <p className='carttxt emptycarttxt' style={{color:'#000000'}}>Please select your food first</p>}
                    </div>
                </div> 
                <div>
                    {this.state.checkoutbutton ? 
                    <div className='checkoutprocess'>
                        <button className='buttoncross' onClick={()=>this.setState({checkoutbutton : false})}>X</button>
                        <p className='paytxt'>How do you want to pay?</p>
                        <div className='optionstopay'>
                            <div className='eachradio'>
                                <input type='radio' className='radiobuttons' onChange={()=>this.setState({otherpay : false})} checked={this.state.otherpay}/>
                                <p className='radiooptionsname' >Debit Card</p>
                            </div>
                            <div className='eachradio'>
                                <input type='radio' className='radiobuttons' onChange={()=>this.setState({otherpay : false})} checked={this.state.otherpay}/>
                                <p className='radiooptionsname'>Credit Card</p>
                            </div>
                            <div className='eachradio'>
                                <input type='radio' className='radiobuttons' onChange={()=>this.setState({otherpay : false})} checked={this.state.otherpay}/>
                                <p className='radiooptionsname'>Net Banking</p>
                            </div>
                            <div className='eachradio'>
                                <input type='radio' className='radiobuttons' onChange={()=>this.setState({cod : true})} checked={this.state.cod}/>
                                <p className='radiooptionsname' onClick={()=>this.setState({cod : true})}>Cash On Delivery (COD)</p>
                            </div>
                            
                        </div>
                        <button className='orderbuttonincart' onClick={()=>buyfood()}>Order</button>
                    </div>
                    : 
                    null
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        login : state.user_reducer.login
    }
}
export default connect(mapStateToProps,{cartorder})(Cart)