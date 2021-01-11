import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import logoImg from "../../images/success.png";
import "./Header.css";
const Header = () => {
	const [responsive, setResonsive] = useState(false);
	const handleHamburger = () => {
		setResonsive(!responsive);
	};

	const [loggenIndUser, setLoggedInUser] = useContext(UserContext);

	let history = useHistory();
	const handleLogIn = () => {
		history.push("/login");
	};

	const handleLogOut = () => {
		setLoggedInUser({});
	};

	return (
		<div className="">
			<nav>
				<div className="nav-wrapper container">
					<div className="nav-brand">
						<img src={logoImg} alt="" />
						<span>E-SHOP</span>
					</div>

					<div onClick={handleHamburger} className="hamburger">
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
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
						{loggenIndUser.email ? (
							<button onClick={handleLogOut} className="btn login-btn">
								Logout
							</button>
						) : (
							<button onClick={handleLogIn} className="btn login-btn">
								Login
							</button>
						)}
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
