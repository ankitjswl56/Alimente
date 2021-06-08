import React, { Component } from 'react';
import './menu.css'
import { connect } from 'react-redux';
import { fetchmenu } from '../../actions';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies()

class Menu extends Component{
    state = {
        menuselect : 'Himalayan Tea',
        cart : [],
        hovering : false
    }
    componentWillMount(){
        this.props.fetchmenu()
        if(cookies.get('rescart')){
            this.setState({
                cart : [...cookies.get('rescart')]
            })
        }
        if(this.props.picclicked != ''){
            this.setState({
                menuselect : this.props.picclicked
            })
        }
    }
    displayheading = (menu) =>{
        let menuheading = []
        for(let i in menu[0]){
            menuheading.push(i)
        }
        menuheading.shift()
        return menuheading.map((each)=>{
            return(
                <div className='menuheading' key={each}>
                    <p className='menuheadingname'
                    onClick={()=>this.setState({menuselect : each.split('_').join(' ')})}
                    style={{
                        color : this.state.menuselect === each.split('_').join(' ') ? 'rgb(209, 5, 5)' : '#000000',
                        fontWeight : this.state.menuselect === each.split('_').join(' ') ? 'bolder' : null,
                        fontSize : this.state.menuselect === each.split('_').join(' ') ? '1.8vw' : '1.6vw'
                    }}
                    >
                        <p className='eachmenuheadingnmae'>{each.split('_').join(' ')}</p>
                    </p>
                </div>
            )
        })
    }
    decidecart = (each) =>{
        let flag = 0
        for(let i of this.state.cart){
            if(i.name === each.name){
                flag = 1
                return (
                    <div className='addedincartbuttons'>
                        <button className='addedtocart' onClick={()=>this.removeitem(i)}><p style={{fontSize: '1.8vw'}}>-</p></button>
                        <p className='addedtocartquantity'>{i.quantity}</p>
                        <button className='addedtocart' onClick={()=>this.addtocart(i)}><p style={{fontSize: '1.8vw'}}>+</p></button>
                    </div>
                ) 
                
            }
        }
        if(flag === 0){
            return <button className='addtocart' onClick={()=>this.addtocart(each)}>Add to cart</button>
        }
    }
    removeitem = (items) =>{
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
    addtocart = (items) =>{
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
    displaymenuitems = (menu) =>{
        window.scrollTo(0,0)
        let menuitems = []
        for(let i in this.props.menu[0]){
            if(i.split('_').join(' ') === menu){
                menuitems.push(this.props.menu[0][`${i}`])
                break
            }
        }
        if(Array.isArray(menuitems[0])){
            return (
                <div>
                    <h3 className='eachitemsubtopic'>{menu}</h3>
                    {
                    menuitems[0].map((Each)=>{
                        return(
                            <div key={Each.name} className='eachitems' data-aos='fade-right'>
                                <img src={`/images/foodimages/${menu.split(' ').join('')}.png`} className='foodimage'/>
                                <div className='eachitemdetails'>
                                    <p className='eachitemsname'>{Each.name}</p>
                                    <p className='eachitemsprice'>Rs. {Each.price}</p>
                                </div>
                                {this.decidecart(Each)}
                            </div>
                        )
                    })   
                    }
                </div>
            ) 
        }else{
            let typesofitems = []
            for(let i in menuitems[0]){
                typesofitems.push(i,menuitems[0][`${i}`])
            }
            return typesofitems.map((Each,i)=>{
                return(
                    <div >
                        {Array.isArray(Each) != true ?  
                        [console.log(Each),
                        <h3 className='eachitemsubtopic'>{Each.split('_').join(' ')}</h3>]
                        :
                        Each.map((eachitem)=>{
                            return(
                                <div key={eachitem.name} className='eachitems' data-aos='fade-right'>
                                    <img src={`/images/foodimages/${typesofitems[i-1].split('_').join('')}.png`} className='foodimage'/>
                                    <div className='eachitemdetails'>
                                        <p className='eachitemsname'>{eachitem.name}</p>
                                        <p className='eachitemsprice'>Rs. {eachitem.price}</p>
                                    </div>
                                    {this.decidecart(eachitem)}
                                </div>
                            )
                        })
                    }
                    </div>
                )
            })
        }
        
    }
    render(){ 
        return(
            <div className='menu'>
                <div className='topofmenu'>
                    <p className='quote'>Our Specials</p> 
                    <Link to='/cart'><AiOutlineShoppingCart className='cart' onClick={()=>window.scrollTo(0,0)}/>
                        {
                            this.state.cart.length > 0 ?
                            <p className='cartlength'>{this.state.cart.length}</p>
                            :
                            null
                        }
                    </Link>
                </div>
                <div className='menusection'>
                    <div className='menuheadingsection'>
                        <div className='allmenutopicnames'>
                            {
                                this.props.menu ? 
                                this.displayheading(this.props.menu)
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className='menuitems'>
                        {  
                            this.props.menu ? 
                            this.displaymenuitems(this.state.menuselect) :
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        menu : state.menureducers.menu,
        picclicked : state.picclicked
    }   
}
export default connect(mapStateToProps,{fetchmenu})(Menu)