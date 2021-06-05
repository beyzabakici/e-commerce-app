import React, { useState, useEffect } from 'react';
import './App.css';
import api from './api';
import ProductCard from './components/ProductCard/ProductCard';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router';
import Favories from './components/Favories/Favories';
import Cart from './components/Cart/Cart';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setProducts(data);
    })
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <div className='card-container'>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      </Route>
      <Route path="/favories" component={Favories} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
