import React, { useContext } from 'react';
import { ProductContext } from '../../App';

export default function Favories({props}) {
  const context = useContext(ProductContext);
  console.log(context)
  return(
    <div>
      Favories
    </div>
  );
}