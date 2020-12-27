import React from "react";
import "./Cart.css";
const Cart = (props) => {
	const cart = props.cart;
	// console.log(cart);
	const subtotal = cart.reduce(
		(subtotal, product) => (subtotal + product.price) * product.quantity,
		0
	);

	let shipping = cart.reduce(
		(shipping, product) => shipping + product.shipping,
		0
	);
	if (subtotal > 200) {
		shipping = 0;
	} else if (subtotal > 100) {
		shipping = shipping / 1;
	}

	// alternative way of getting subtotal and shipping price
	// let subtotal = 0;
	// cart.forEach((product) => {
	// 	subtotal = subtotal + product.price;
	// });

	const beforetaxTotal = subtotal + shipping;
	const tax = beforetaxTotal / 30;
	const grandTotal = subtotal + shipping + tax;

	const formatNumber = (num) => {
		const precision = num.toFixed(2);
		return Number(precision);
	};
	return (
		<div>
			<div className="cart-title">
				<h3>Order Summary</h3>
				<p>Items Ordered {cart.length} </p>
			</div>
			<div className="cart-pricing">
				<p>Subtotal:</p>
				<p>$ {formatNumber(subtotal)} </p>
				<p>Shipping:</p>
				<p>$ {formatNumber(shipping)} </p>
				<p>Total Before tax:</p>
				<p>$ {formatNumber(beforetaxTotal)} </p>
				<p>Estimated Tax:</p>
				<p>$ {formatNumber(tax)} </p>
				<p>Total Price:</p>
				<p>$ {formatNumber(grandTotal)} </p>
			</div>

			{props.children}
		</div>
	);
};
export default Cart;
