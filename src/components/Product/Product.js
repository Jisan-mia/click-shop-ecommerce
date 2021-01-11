import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
	// const product = props.product;
	// console.log(props.product.key);
	const {
		img,
		name,
		seller,
		price,
		stock,
		category,
		features,
		key,
	} = props.product;
	let featuresLeangth = 0;
	if (features.length === 0) {
		// console.log("Its zero features");
		featuresLeangth = 0;
	} else {
		// console.log("it has ", features);
		featuresLeangth = features.slice(0, 2);
	}
	const randomNumber = (min, max) => {
		return (Math.floor(Math.random() * (max - min)) + min).toFixed(2);
	};

	return (
		<div className="product">
			<div className="product-img">
				<img src={img} alt="product" />
			</div>

			<div className="product-detail">
				<p className="p-seller">
					{seller} {category}
				</p>
				<p className="p-price">
					${price}
					<del className="rand-price"> {price + 100} </del>
				</p>
				<h3 className="pd-name">
					{props.showAddCart ? (
						<Link to={`/product/${key}`}>{name}</Link>
					) : (
						name
					)}
				</h3>

				{/* product features */}
				<div className="features">
					{features.length ? (
						features.slice(0, 2).map((fe, index) => (
							<p key={index}>
								- {fe.description} {fe.value}
							</p>
						))
					) : (
						<div>
							<p> - Lorem ipsum dolor sit amet.</p>
							<p> - Lorem ipsum dolor sit amet.</p>
						</div>
					)}
				</div>
				{/* product features end */}

				<p className="stock">Only {stock} left in stock - order soon</p>

				{/* add to cart button */}
				{/* <div className="form-group"> */}
				{props.showAddCart && (
					<button
						onClick={() => {
							props.handleAddProduct(props.product);
						}}
						className="buy-btn"
					>
						Add to cart
					</button>
				)}

				{/* </div> */}
				{/* add to cart button end*/}
			</div>
		</div>
	);
};

export default Product;
