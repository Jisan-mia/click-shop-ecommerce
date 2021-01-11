import React from "react";
import { useForm } from "react-hook-form";
import "./Shipment.css";

export default function App() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form className="container form" onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Name"
				name="name"
				ref={register({ required: true, max: 0, min: 3, maxLength: 80 })}
			/>
			{errors.name && <span className="error">Name is required</span>}
			<input
				type="text"
				placeholder="Email"
				name="email"
				ref={register({ required: true, pattern: /^\S+@\S+$/i })}
			/>
			{errors.email && <span className="error">Email is required</span>}
			<input
				type="tel"
				placeholder="Mobile number"
				name="phone"
				ref={register({ required: true, minLength: 6, maxLength: 12 })}
			/>
			{errors.phone && <span className="error">Phone Num is required</span>}
			<input
				type="text"
				placeholder="Address"
				name="address"
				ref={register({ required: true, min: 5 })}
			/>
			{errors.address && <span className="error">Address is required</span>}
			<input
				type="number"
				placeholder="Zip Code"
				name="zip"
				ref={register({ required: true, min: 1 })}
			/>
			{errors.zip && <span className="error"> Zip Code is required</span>}

			<input value="Submit" className="shipment-submit" type="submit" />
		</form>
	);
}
