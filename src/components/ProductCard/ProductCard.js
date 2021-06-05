import React from 'react';
import './ProductCard.css';

export default function ProductCard({product}){
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
					<a href=""><i className="fa fa-heart"></i></a>
					<a href=""><i className="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
  )
}