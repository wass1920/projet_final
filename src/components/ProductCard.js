import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Rate from './Rate';
import  {Button}  from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import {Modify,Add} from '../store/Actions'

const ProductCard = ({ product: { title, posterUrl, description, rate,id,prix } }) => {

  const search=(tab)=>{
    var test;
    var x=tab.find(e=>e.id===id );
    typeof(x)==='undefined' ? test=false:test=true;
    return test ;
}

const x = useSelector(state=>state);
const dispatch = useDispatch();
const Ajout=(e)=>{
    e.preventDefault();

    if(search(x)){
        console.log("includedd")
        dispatch(Modify({ title, posterUrl, description, rate,id,prix }))
    }else{
        dispatch(Add({ title, posterUrl, description, rate,id,prix }));
    }
    
    
    
    
    
}
  return (
    
    <div className='film'>
      {console.log(x)}
      <Card style={{ height: `500px`, width:'300px' }}>
        <CardTitle>
          <div className=' row justify-content-center '>
            <h6>{title}</h6>
          </div>
        </CardTitle>
        <CardImg
      
          style={{ height: `300px`, width:'290px' }}
          src={posterUrl}
          alt='Card image cap'
        />
        <CardBody>
          <div className=''>
            <CardText>{description}</CardText>
          </div>
          <div className=''>
            <CardText>{prix}</CardText>
          </div>
          <div className=''>
            <Rate rating={rate} />
          </div>
        </CardBody>
        <Button className='bot'>
          <Link to={`${id}`}
            state={{Trailer:posterUrl,description:description}}>
            See more
          </Link>
        </Button>
        <Button onClick={(e)=>Ajout(e)} >
          
            
           Add to cart
          
        </Button>
       
        
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default ProductCard;