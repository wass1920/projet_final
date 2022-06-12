import React from 'react'
import {useParams,useLocation} from 'react-router-dom'

export default function ProductRoute() {
    const{id}=useParams();
    const location= useLocation();

  return (
    <div>
      <div className='tr1'>
      <img alt='' src={location.state.Trailer}/>
      </div>
      <div className='tr2'>
      <p>{location.state.description}</p>
    </div>
    <div className='tr3'>
      <p>{location.state.prix}</p>
    </div>
    </div>

  )
}
