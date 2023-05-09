import NavBar from "./NavBar";

const SignUp = () => {
	return (
		<>
			<NavBar />
			<div className="d-flex flex-column mb-3 mx-3">
				<div className="p-2">
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Enter your name"
						/>
					</div>
				</div>
				<div className="p-2">
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="text"
							className="form-control"
							id="email"
							placeholder="Enter your email"
						/>
					</div>
				</div>
				<div className="p-2">
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Enter your password"
						/>
					</div>
				</div>
				<div className="p-2">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</div>
			</div>
		</>
	);
};

export default SignUp;
