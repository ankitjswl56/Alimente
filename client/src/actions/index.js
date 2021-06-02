import axios from 'axios';

export const fetchmenu = () =>{
    return async function(dispatch){
        const response = await axios.get('/api/menu')
        dispatch({
            type : 'FETCH_MENU',
            payload : response.data
        })
    } 
}

export const fetchuserprofile = () =>{
    return async function (dispatch){
        const response = await axios.get('/api/userprofile')
        dispatch({
            type : 'FETCH_USERPROFILE',
            payload : response.data
        })
    }
}
export const signinuser = (email, password) =>{
    return async  function (dispatch){
        const response = await axios.post('/api/userlogin',{email,password})
        dispatch({
            type : 'USER_LOGIN',
            payload : response.data
        })
    }
}
export const checkisauth = () =>{
    return async function(dispatch){
        const response = await axios.get('/api/isauth')
        dispatch({
            type: 'CHECK_ISAUTH',
            payload : response.data
        })
    }
}
export const signupuser = (name,email,password,phonenumber) =>{
    return async function(dispatch){
        const response = await axios.post('/api/usersignup',{name,email,password,phonenumber})
        dispatch({
            type : 'USER_SIGNUP',
            payload : response.data
        })
    }
}
export const logoutuser = () =>{
    return async function(dispatch){
        const response = await axios.get('/api/logout')
        dispatch({
            type : 'USER_LOGOUT',
            payload : response.data
        })
    }
}

export const contactusform = (firstname,lastname,email,phonenumber,message) =>{
    return async function(dispatch){
        const response = await axios.post('/api/contactusform',{firstname,lastname,email,phonenumber,message})
        dispatch({
            type : 'CONTACTUS_FORM',
            payload : response.data
        })
    }
}

export const cartorder = (userid, fooddetail, totalprice) =>{
    return async function(dispatch){
        const response = await axios.post('/api/usercart',{userid, fooddetail, totalprice})
        dispatch({
            type: 'ORDER_CONFIRM',
            payload : response.data
        })
    }
}

export const fetchorders = (userid) =>{
    return async function (dispatch){
        const response = await axios.get('/api/cart',{userid})
        dispatch({
            type : 'FETCH_ORDERS',
            payload : response.data
        })   
    }
}

export const picclicked = (picname) =>{
    return {
        type : 'PIC_CLICKED',
        payload : picname
    }
}
export const resetpassword = (email) =>{
    return async function(dispatch){
        const response = await axios.post('/api/resetpassword',{email})
        dispatch({
            type : 'RESET_PASSWORD',
            payload  : response.data
        })
    }
}
export const resetpasswordwithcode = (code,password,email) =>{
    return async function (dispatch){
        const response = await axios.post('/api/resetpasswordwithcode',{code,password,email})
        dispatch({
            type : 'RESET_PASSWORD_WITHCODE',
            payload  : response.data
        })
    }
}