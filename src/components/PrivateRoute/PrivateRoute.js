import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
	const [loogedInUser, setLoggedInUser] = useContext(UserContext);

	return (
		<div>
			<Route
				{...rest}
				render={({ location }) =>
					loogedInUser.email ? (
						children
					) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: location },
							}}
						/>
					)
				}
			/>
		</div>
	);
};

export default PrivateRoute;
