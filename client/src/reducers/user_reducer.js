export default (state={},action)=>{
    switch(action.type){
        case 'USER_LOGIN':
            return {...state, login:action.payload}
        case 'USER_LOGOUT':
            return {...state, login:action.payload}
        case 'FETCH_USERPROFILE':
            return {...state, profile:action.payload}
        case 'USER_SIGNUP':
            return {...state, login:action.payload}
        case 'CHECK_ISAUTH':
            return {...state, login:action.payload}
        case 'CONTACTUS_FORM':
            return {...state, contactusform:action.payload}
        case 'ORDER_CONFIRM':
            return {...state, orders:action.payload}
        case 'FETCH_ORDERS':
            return {...state, userorders : action.payload}
        default:
            return state
    }
}