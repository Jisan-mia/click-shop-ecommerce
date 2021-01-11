import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import fakeData from "../../fakeData";
import successfullImg from "../../images/success.png";
import {
	getDatabaseCart,
	removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
const Review = () => {
	const [cart, setCart] = useState([]);
	const [orderPlaced, setOrderPlaced] = useState(false);

	const history = useHistory();
	const handleProceedCheckout = () => {
		history.push("/shipment");
	};

	const removeProduct = (productKey) => {
		const newCart = cart.filter((pd) => pd.key !== productKey);
		setCart(newCart);
		removeFromDatabaseCart(productKey);
	};
	useEffect(() => {
		//data from cart
		const savedCart = getDatabaseCart();
		const productKeys = Object.keys(savedCart);
		const cartProducts = productKeys.map((key) => {
			const product = fakeData.find((pd) => pd.key === key);
			product.quantity = savedCart[key];
			return product;
		});
		setCart(cartProducts);
	}, []);

	let orderSuccessMsg;
	if (orderPlaced) {
		orderSuccessMsg = (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "80%",
					margin: "0 auto",
				}}
			>
				<img style={{ width: "200px" }} src={successfullImg} alt="" />
				<h1>You've successully Ordered</h1>
			</div>
		);
	}
	return (
		<div className="shop-container">
			<div className="product-container">
				{cart.length ? (
					cart.map((pd) => (
						<ReviewItem
							removeProduct={removeProduct}
							product={pd}
							key={pd.key}
						></ReviewItem>
					))
				) : (
					<h1 style={{ display: "inline-block", marginTop: "20px" }}>
						<Link
							style={{
								boxShadow: "0 0 10px 4px rgba(0, 0, 0, 0.1)",
								padding: "6px",
								backgroundColor: "rgb(253 255 253)",
							}}
							to="/shop"
						>
							Shop Here
						</Link>
					</h1>
				)}
				{orderSuccessMsg}
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<Link
						onClick={() =>
							cart.length
								? handleProceedCheckout()
								: alert("Add product before order")
						}
						className="review-btn order-btn"
						// to="/order"
					>
						Proceed Checkout
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Review;
