import React, { useContext } from 'react';
import { ProductContext } from '../../App';
import ProductCard from '../ProductCard/ProductCard';
import './Favories.css';

export default function Favories({props}) {
  const context = useContext(ProductContext);

  return(
    <div className='favories-container'>
     <h1 className='title'> FAVORIES </h1>
     {
       context.state.favories.map((favItem) => <ProductCard product={favItem} key={favItem.id} showDropButtons={true} /> )
     }
    </div>
  );
}