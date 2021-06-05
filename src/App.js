import React, { useState, useEffect } from 'react';
import './App.css';
import api from './api';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(({ data }) => {
      setProducts(data);
    })
  }, []);

  return (
    <div className="App">
      <div className='card-container'>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />
        })}
      </div>
    </div>
  );
}

export default App;
