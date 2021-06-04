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
        case 'CHANGE_PASSWORD':
            return {...state, passwordchanged:action.payload}
        case 'EDIT_DETAILS':
            return {...state, editdetails:action.payload}    
        case 'RESET_PASSWORD':
            return{...state, codeadded : action.payload}
        case 'RESET_PASSWORD_WITHCODE':
            return {...state, passwordupdated: action.payload}
        default:
            return state
    }
}