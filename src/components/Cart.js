
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Modify,decrement,Delete,Erase} from '../store/Actions'
import './Cart.css';
export default function Cart() {
  const dispatch = useDispatch();
 
  const cartItems=useSelector(state=>state);
  const toltalprice= ()=>{
    return cartItems.reduce((tot,e)=>tot+(e.qt * e.prix),0)
  }
  return (
   <div>
     <div className='total'> Total :{toltalprice()} Dt </div>
      
      {console.log ( toltalprice())}
      

      <button  onClick={(event)=>{
        event.preventDefault();
        dispatch(Erase())
      }}>
         Erase
      </button>
     {cartItems.map(e=>(
       <div >
       <p className='productnamepanel '>{e.title}</p>
       <p>{e.qt === 0 ? e.qt * e.prix : e.qt * e.prix} Dt</p>
      
       
       
       <img className='imgpanel' alt='' src={e.posterUrl}/>

       <button onClick={(event)=>{
            event.preventDefault();
            
            dispatch(Modify(e))
          }}> + </button>
       <p>{e.qt}</p>
       <button onClick={(event)=>{
            event.preventDefault();
            if(e.qt>0){
              dispatch(decrement(e))
            }
            
          }}> - </button>
           <button style={{backgroundColor:"Green"}} onClick={(event)=>{
            event.preventDefault();
            dispatch(Delete(e));
          }}>
           Delete
          </button>
      </div>

     ))}
     
     
   </div>
  )
}