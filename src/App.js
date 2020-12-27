import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";

function App() {
	return (
		<div>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Shop></Shop>
					</Route>
					<Route path="/shop">
						<Shop></Shop>
					</Route>
					<Route path="/review">
						<Review></Review>
					</Route>
					<Route path="/inventory">
						<Inventory></Inventory>
					</Route>

					<Route path="/product/:productKey">
						<ProductDetail></ProductDetail>
					</Route>
					<Route path="/contact">
						<Contact></Contact>
					</Route>

					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
