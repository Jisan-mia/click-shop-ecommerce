import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = (props) => {
	const {
		name,
		seller,
		price,
		category,
		features,
		key,
		quantity,
	} = props.product;
	return (
		<div className="product">
			<div className="product-detail">
				<p className="p-seller">
					{seller} {category}
				</p>
				<p className="p-price">
					${price}
					<del className="rand-price"> {price + 100} </del>
				</p>
				<p className="p-price">Quantity: {quantity}</p>

				<h3 className="pd-name">
					<Link to={`/product/${key}`}>{name}</Link>
				</h3>

				{/* product features */}
				<div className="features">
					{features.length ? (
						features.slice(0, 2).map((fe) => (
							<p>
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

				{/* add to cart button */}
				{/* <div className="form-group"> */}

				<button onClick={() => props.removeProduct(key)} className="buy-btn">
					Delete
				</button>

				{/* </div> */}
				{/* add to cart button end*/}
			</div>
		</div>
	);
};

export default ReviewItem;
