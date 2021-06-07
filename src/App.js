import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import api from './api';
import ProductCard from './components/ProductCard/ProductCard';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router';
import Favories from './components/Favories/Favories';
import Cart from './components/Cart/Cart';

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  const [contextState, setContextState] = useState({
    favories: [],
    cart: [],
  })

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setProducts(data);
    })
  }, []);

  return (
    <ProductContext.Provider value={{ state: contextState, setContextState }}>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <div className='card-container'>
            {products.map((product) => {
              return <ProductCard key={product.id} product={product}  />
            })}
          </div>
        </Route>
        <Route path="/favories" component={Favories} />
        <Route path="/cart" component={Cart} />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
