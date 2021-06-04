import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers';
import Layout from './hoc/layout';
import Home from './components/homepage/home';
import Aboutus from './components/aboutus/aboutus';
import Menu from './components/menu/menu';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';
import UserProfile from './components/userprofile/userprofile';
import Signin from './components/userprofile/signin/signin';
import Signup from './components/userprofile/signup/signup';
import Cart from './components/menu/cart/cart';
import Resetpassword from './components/userprofile/resetpassword/resetpassword';
import Authcheck from './hoc/authcheck';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component{
    componentWillMount(){
        AOS.init({
            delay : 100,
            duration : 500
        })
    }
    render(){
        return (
            <div>
                <Route path='/' exact component={Authcheck(Home,null)}/>
                <Route path='/aboutus' exact component={Authcheck(Aboutus,null)}/>
                <Route path='/menu' exact component={Authcheck(Menu,null)}/>
                <Route path='/cart' exact component={Authcheck(Cart,null)}/>
                <Route path='/gallery' exact component={Authcheck(Gallery,null)}/>
                <Route path='/contact' exact component={Authcheck(Contact,null)}/>
                <Route path='/userprofile' exact component={Authcheck(UserProfile,true)}/>
                <Route path='/signin' exact component={Authcheck(Signin,false)}/>
                <Route path='/signup' exact component={Authcheck(Signup,false)}/>
                <Route path='/resetpassword' exact component={Authcheck(Resetpassword,false)}/>
            </div>
        )
    }
}
ReactDOM.render(
<Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <BrowserRouter>
        <Layout>
            <App/>
        </Layout>
    </BrowserRouter>
</Provider>
,document.querySelector('#root'))