import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function Main() {
  return (
    <div className='Main' >
        <Carousel>
  <Carousel.Item>
  <img className="d-block w-100" src="https://media.mytek.tn/media/webp_image/wysiwyg/banner/Mai22/slider-camera-de-surveillance-yoosse.webp" 
  alt="Sélection Téléviseurs" style={{width:'1650' ,height:'550'}}/>
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    
  <img className="d-block w-100" src="https://media.mytek.tn/media/wysiwyg/banner/Avr22/slider-selection-televiseurs-539dt.jpg" 
  alt="Sélection Téléviseurs" style={{width:'1650' ,height:'550'}}/>


    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img className="d-block w-100"  src="https://media.mytek.tn/media/webp_image/wysiwyg/banner/Avrl22/slider-selection-laptop-hp-lenovo-asus-celeron.webp" 
  alt="Sélection Téléviseurs" style={{width:'1650' ,height:'550'}}/>

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}
