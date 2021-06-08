import React, {useContext, useEffect, useState} from 'react';
import './ProductCard.css';
import { ProductContext } from '../../App';

export default function ProductCard({product, showDropButtons}){

	const context = useContext(ProductContext);
	const [ hasCartItem, setHasCartItem ] = useState(false);
	const [ hasFavItem, setHasFavItem ] = useState(false);

	useEffect(() => {
		const findFavProduct = context.state.favories.find((item) => item.id === product.id);
		const findCartProduct = context.state.cart.find((item) => item.id === product.id);
		
		if (findFavProduct && findCartProduct) {
			setHasFavItem(true)
			setHasCartItem(true)
		}
		else if (findFavProduct) {
			setHasFavItem(true)
		}
		else if (findCartProduct) {
			setHasCartItem(true)
		}	
		
	}, [context.state.favories, context.state.cart]);

  const addToCart = () => {
		const findProduct = context.state.cart.find((item) => item.id === product.id);
		
		if (!findProduct) {
			context.setContextState({
				...context.state,
				cart : [...context.state.cart, product]
			})
		}
  }
	
	const addToFav = () => {
		const findProduct = context.state.favories.find((item) => item.id === product.id);
		
		if (!findProduct) {
			context.setContextState({
				...context.state,
				favories : [...context.state.favories, product]
			})
		}
  }

	const handleRemoveItem = () => {
		const arr = context.state.favories.filter((item) => item.id !== product.id );
		context.setContextState({
			...context.state,
			favories : arr,
		})
	}

	const renderButton = () => {
		if (!showDropButtons) {
			return (
			<>
				<button className={hasFavItem ? 'isSelect' : 'notSelect' } onClick={() => addToFav() }><i className="fa fa-heart"></i></button>
				<button className={hasCartItem ? 'isSelect' : 'notSelect' } onClick={() => addToCart() }><i className="fa fa-shopping-cart"></i></button>
			</>
			)
		}

		return <button onClick={() => handleRemoveItem()}><i className="fa fa-times"></i></button>
	}

  return(
    <div className="product-card">
		<div className="product-tumb">
			<img src={product.image} alt={product.name} />
		</div>
		<div className="product-details">
			<span className="product-catagory">{product.category}</span>
			<h4>{product.name}</h4>
			<p>{product.description}</p>
			<div className="product-bottom-details">
				<div className="product-price">${product.price}</div>
				<div className="product-links">
					{renderButton()}
				</div>
			</div>
		</div>
	</div>
  )
}