import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';





export default function AddProduct({handleAdd}) {
  const[product,setProduct]=useState({
    title:"",
    posterUrl:"",
    description:"",
    prix:0
  })

  const ChangeHandler=(e)=>{
    setProduct({...product,[e.target.name]:e.target.value})
  }


  return (
    <div>
                  <div className="Formulaire">
              <Form>
                <Form.Group className="mb-3" >
                            <Form.Label >Title of Movie</Form.Label>
                    <Form.Control name="title" type="text" onChange={ChangeHandler}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                     <Form.Label>Poster Url</Form.Label>
                    <Form.Control name="posterUrl" type="websiteUrl"onChange={ChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" >
                     <Form.Label>Description of Movie</Form.Label>
                    <Form.Control name="description" type="text" onChange={ChangeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" >
                     <Form.Label>Rate</Form.Label>
                    <Form.Control name="rate" type="number"onChange={ChangeHandler} />
                    <Form.Text className="text-muted">
                            Note = . /5
                    </Form.Text>
                </Form.Group>

               <Button   onClick={(e)=>{e.preventDefault(); 
      handleAdd(product);

      }}>
                 Add 
               </Button>
             </Form>
            </div>

    </div>
  )
}
