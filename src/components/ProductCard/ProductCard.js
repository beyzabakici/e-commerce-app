import React, {useContext} from 'react';
import './ProductCard.css';
import { ProductContext } from '../../App';

export default function ProductCard({product}){

	const context = useContext(ProductContext);

  return(
    <div className="product-card">
		<div className="product-tumb">
			<img src={product.image} alt={product.name} />
		</div>
		<div className="product-details">
			<span className="product-catagory">{product.category}</span>
			<h4><a href="">{product.name}</a></h4>
			<p>{product.description}</p>
			<div className="product-bottom-details">
				<div className="product-price">${product.price}</div>
				<div className="product-links">
					<button onClick={() => console.log('kalp') }><i className="fa fa-heart"></i></button>
					<button onClick={() => context.addToCart(product) }><i className="fa fa-shopping-cart"></i></button>
				</div>
			</div>
		</div>
	</div>
  )
}