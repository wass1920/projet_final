
import {ADD_TO_CART,DELETE_FROM_CART,ERASE_CART,MODIFY,DECREMENT} from './ActionTypes'

const products =[] ;

const Reducer=(state=products,action)=>{
    switch(action.type){
       

        case ADD_TO_CART : 
            return [...state , {...action.payload , qt:1} ] ;
        case DELETE_FROM_CART:
            return state.filter(e=>e.id !== action.payload.id);
        case ERASE_CART : 
            return[];
        case MODIFY : 
            return state.map(e=>e.id===action.payload.id ? {...e , qt:e.qt+1}:e )
        case DECREMENT : 
            return state.map(e=>e.id===action.payload.id ? {...e , qt:e.qt-1}:e )    
        default :
            return state 
    }
}
export default Reducer ;