import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import ProductCard from '../ProductCard/ProductCard';
import './Cart.css';

export default function Cart({props}) {
  const context = useContext(ProductContext);

  return(
    <div className='cart-container'>
     <h1 className='title'> CART </h1>
     {
       context.state.cart.map((cartItem) => <ProductCard product={cartItem} key={cartItem.id} showDropButtons={true} /> )
     }
    </div>
  );
}