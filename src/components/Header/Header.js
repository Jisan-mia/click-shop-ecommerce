import React from "react";
import "./Header.css";
import logo from "./img/logo.png";

const Header = () => {
	return (
		<div className="header">
			{/* <div className="img-div">
        <img src={logo} alt="logo" />
      </div> */}

			<div className="nav">
				<div className="img-div">
					<img src={logo} alt="logo" />
				</div>
				<ul className="navbar">
					<li>
						<a href="/shop">Shop</a>
					</li>
					<li>
						<a href="/review">Order Review</a>
					</li>
					<li>
						<a href="/manage">Manage Inventroy</a>
					</li>
				</ul>
			</div>

			<div className="search">
				<input type="text" placeholder="Search here" />
				<button className="search-btn">Search</button>
			</div>
		</div>
	);
};

export default Header;
