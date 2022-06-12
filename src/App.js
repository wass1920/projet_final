import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import ProductRoute from './components/ProductRoute';
import Navbar from './components/Navbar.js'
import Cart from './components/Cart';




export default function App() {
  return (
    <div className='App'>
  
    <BrowserRouter>
 

    
     <Routes>
      <Route exact path="/"  element={<Navbar/>}/>   
      <Route path="/:id" element={<ProductRoute/>}/>
      <Route path="/Cart" element={<Cart/>}/>   
     </Routes>
     
     <button>
  <Link to="/">Home</Link>
  
  </button>
     </BrowserRouter>
      <footer>
      <div className="footer">
            <p> Created with ❤️ by W@ss1920</p>
        </div> 
      </footer>
    </div>
  )
  
}

