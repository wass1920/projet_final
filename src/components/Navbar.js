import React ,{ useState } from 'react'
import { Navbar,Container,Nav,Form} from 'react-bootstrap';
import SearchBar from './SearchBar';
import { productsList } from '../assets/mookData';
import ProductsList from './ProductsList';
import '../App.css';
import AddProduct from './AddProduct';
import Main from '../Main';
import {Link} from 'react-router-dom'


export default function NavBar() {
  const [productList, setProductList] = useState(productsList);
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState(0);
  const addProduct = (newProduct) => setProductList([...productList, newProduct]);
  
  const handle = (e) => setSearch(e.target.value);
  return (
    <div >
        <Navbar >
  <Container fluid>
    <Navbar.Brand className='logo'>MegaStore
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
      <Form className="d-flex">
  
              <SearchBar
          handle={handle}
          setRating={setRating}
          rating={rating}
        />
          <Link to={'/Cart'} > <img className='Panel' src='./panier.png' alt='' /></Link>    
              
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Main/>
<ProductsList

        productsArray={
          search
            ? productList.filter((product) =>
                product.title.toLowerCase().includes(search.toLowerCase())
              )
            : rating > 1
            ? productList.filter((product) => product.rate >= rating)
            : productList
        }
        
      />
      <AddProduct handleAdd={addProduct} />
    </div>
  )
}
