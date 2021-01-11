import React from "react";

const Contact = () => {
	return (
		<div className="container py-2">
			<div className="jumbotron">
				<div className="py-1">
					<form className="row g-3 needs-validation">
						<div className="col-md-4 py-2">
							<label htmlFor="validationCustom01" className="form-label">
								First name
							</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom01"
								placeholder="Your first name"
								required
							/>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="col-md-4 py-2">
							<label htmlFor="validationCustom02" className="form-label">
								Last name
							</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom02"
								placeholder="Your last name"
								required
							/>
							<div className="valid-feedback">Looks good!</div>
						</div>
						<div className="col-md-4 py-2">
							<label htmlFor="validationCustomUsername" className="form-label">
								Username
							</label>
							<div className="input-group has-validation">
								<span className="input-group-text" id="inputGroupPrepend">
									@
								</span>
								<input
									type="text"
									className="form-control"
									id="validationCustomUsername"
									aria-describedby="inputGroupPrepend"
									required
								/>
								<div className="invalid-feedback">
									Please choose a username.
								</div>
							</div>
						</div>
						<div className="col-md-6 py-2">
							<label htmlFor="validationCustom03" className="form-label">
								City
							</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom03"
								required
							/>
							<div className="invalid-feedback">
								Please provide a valid city.
							</div>
						</div>
						<div className="col-md-3 py-2">
							<label htmlFor="validationCustom04" className="form-label">
								State
							</label>
							<select
								className="form-select form-control"
								id="validationCustom04"
								required
							>
								<option defaultValue disabled value="">
									Choose City
								</option>
								<option>New York</option>
								<option value="">Dhaka</option>
								<option> California</option>
							</select>
							<div className="invalid-feedback">
								Please select a valid state.
							</div>
						</div>
						<div className="col-md-3 py-2">
							<label htmlFor="validationCustom05" className="form-label">
								Zip
							</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom05"
								required
							/>
							<div className="invalid-feedback">
								Please provide a valid zip.
							</div>
						</div>
						<div className="col-md-12 py-2">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								required
							/>
							<div id="emailHelp" className="form-text">
								We'll never share your email with anyone else.
							</div>
						</div>
						<div className="col-12 py-2">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="invalidCheck"
									required
								/>
								<label className="form-check-label" htmlFor="invalidCheck">
									Agree to terms and conditions
								</label>
								<div className="invalid-feedback">
									You must agree before submitting.
								</div>
							</div>
						</div>

						<div className="col-12 py-4">
							<button className="btn btn-primary" type="submit">
								Submit form
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
