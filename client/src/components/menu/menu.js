import React, { Component } from 'react';
import './menu.css'
import { connect } from 'react-redux';
import { fetchmenu } from '../../actions';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies()

const cart = []

if(cookies.get('rescart')){
    cart.push(...cookies.get('rescart'))
}

class Menu extends Component{
    state = {
        cartlength : cookies.get('rescart') ? cookies.get('rescart').length : null
    }
    componentWillMount(){
        this.props.fetchmenu()
        if(cookies.get('rescart')){
            this.setState({
                cartlength : cookies.get('rescart').length
            })
        }else{
            cart.length = 0
        }
    }
    displaymenu = (menu) =>{
        let resmenu = []
        if(menu){
            for(let i in menu[0]){
                if(Array.isArray(menu[0][`${i}`])){
                    let renamed = i.split('_').join(' ')
                    resmenu.push([renamed, menu[0][`${i}`]])
                }else if(typeof menu[0][`${i}`] === 'object'){
                    for(let j in menu[0][`${i}`]){
                        let renamed = j.split('_').join(' ')
                        resmenu.push([renamed,menu[0][`${i}`][`${j}`]])
                    }
                }
            }
        }
        return(
            resmenu.map((eachitem)=>{
                return(
                    <div key={eachitem}>
                        <p className='menuheadingname'>{eachitem[0]}</p>
                        <h6>
                            {eachitem[1].map((details)=>{
                                let nameandprice=[]
                                for(let i in details){
                                    nameandprice.push(details[i])
                                }
                                return(
                                    <div className='menutopics' key={nameandprice[0]}>
                                        <p className='alimentebeforefood'>Alimente</p>
                                        <div>
                                            <p className='menutopicname'>{nameandprice[0]}</p>
                                            <p className='menutopicprice'>Rs. {nameandprice[1]}</p>
                                        </div>
                                        <br/>
                                        <button className='addtocartbtn' onClick={()=>this.additemtocart(nameandprice)}>
                                            Add to cart
                                        </button>
                                    </div>
                                )
                            })}
                        </h6>
                    </div>
                )
            })
        )
    }
    additemtocart = (items) =>{
        let flag = 0
        for(let i of cart){
            if(i['items'][0] === items[0]){
                i['total'] = Number(i['total']) + 1
                flag = 1
            }
            if(flag === 1){
                break
            }
        }
        if(flag === 0){
            cart.push({
                'items' : items,
                'total' : 1
            })
        }
        cookies.set('rescart',cart)
        this.setState({cartlength : cart.length})
    }
    render(){  
        return(
            <div className='menu'>
                    <p className='menutxt'>Menu</p>
                    <Link to='/cart'>
                        <AiOutlineShoppingCart className='cartlogo' onClick={()=>window.scrollTo(0,0)} />
                        <span className='cartnumber'>{this.state.cartlength > 0 ? this.state.cartlength : null}</span>
                    </Link>
                <div className='allmenu'>
                    {
                        this.displaymenu(this.props.menu)
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        menu : state.menureducers.menu
    }
}
export default connect(mapStateToProps,{fetchmenu})(Menu)