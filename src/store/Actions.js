import {ADD_TO_CART,DELETE_FROM_CART,ERASE_CART,MODIFY,DECREMENT,All_CART} from './ActionTypes'

export const Add=(payload)=>{
    return {
        type : ADD_TO_CART , 
        payload 
    }
}
export const Delete=(payload)=>{
    return {
        type : DELETE_FROM_CART , 
        payload 
    }
}
export const Erase=(payload)=>{
    return {
        type : ERASE_CART , 
        payload 
    }
}
export const Modify=(payload)=>{
    return {
        type : MODIFY , 
        payload 
    }
}
export const decrement=(payload)=>{
    return {
        type : DECREMENT , 
        payload 
    }
}

export const All=(payload)=>{
    return{
        type: All_CART,
        payload
    }
}