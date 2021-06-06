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
    products: [],
    favories: [],
    cart: [],
  })

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setProducts(data);
      setContextState({ products: data })
    })
  }, []);

  const addToCart = (item) => {
    setContextState(...contextState, {
      cart: contextState.cart.find(cartItem => cartItem.id === item.id)
        ? contextState.cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem)
        : [...contextState.cart, { ...item, count: 1 }]
    })
  }

  return (
    <ProductContext.Provider value={{ state: contextState, addToCart }}>
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
    </ProductContext.Provider>
  );
}

export default App;
