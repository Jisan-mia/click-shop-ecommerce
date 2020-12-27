import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/success.png";
import "./Header.css";
const Header = () => {
	const [responsive, setResonsive] = useState(false);
	const handleHamburger = () => {
		setResonsive(!responsive);
	};
	return (
		<div className="">
			<nav>
				<div className="nav-wrapper container">
					<div className="nav-brand">
						<img src={logoImg} alt="" />
						<span>E-SHOP</span>
					</div>

					<div onClick={handleHamburger} class="hamburger">
						<span class="bar"></span>
						<span class="bar"></span>
						<span class="bar"></span>
					</div>

					<ul className={responsive ? "nav-list" : "nav-list open"}>
						<li className="nav-list-items">
							<Link to="/shop">Shop</Link>
						</li>
						<li className="nav-list-items">
							<Link to="/review">Review Order</Link>
						</li>
						<li className="nav-list-items">
							<Link to="/inventory">Inventory</Link>
						</li>
						<li className="nav-list-items">
							<Link to="/contact">Contact</Link>
						</li>
						<button class="btn login-btn">Login</button>
					</ul>
				</div>
			</nav>

			{/* <div className="search">
				<input type="text" placeholder="Search here" />
				<button className="search-btn">Search</button>
			</div> */}
		</div>
	);
};

export default Header;
