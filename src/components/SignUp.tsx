import { useRef, useState } from "react";
import NavBar from "./NavBar";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [errors, setErrors] = useState({ name: "", email: "", password: "" });
	const [isFormValid, setIsFormValid] = useState(false);
	const navigate = useNavigate();

	const schema = z.object({
		name: z.string().min(1),
		email: z.string().email(),
		password: z.string().min(5),
	});

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		validateData();
		navigate("/");
	};

	const validateData = () => {
		if (!nameRef.current || !emailRef.current || !passwordRef.current) return;
		const inputs = {
			name: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};
		const result = schema.safeParse(inputs);
		const errorsCopy = { name: "", email: "", password: "" };
		if (!result.success) {
			setIsFormValid(false);
			result.error.issues.map((e) => {
				errorsCopy[e.path[0] as keyof typeof errorsCopy] = e.message;
			});
		} else {
			setIsFormValid(true);
		}
		setErrors(errorsCopy);
	};

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
							ref={nameRef}
							onChange={validateData}
						/>
						{errors.name && (
							<div className="alert alert-danger" role="alert">
								{errors.name}
							</div>
						)}
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
							ref={emailRef}
							onChange={validateData}
						/>
						{errors.email && (
							<div className="alert alert-danger" role="alert">
								{errors.email}
							</div>
						)}
					</div>
				</div>
				<div className="p-2">
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="text"
							className="form-control"
							id="password"
							placeholder="Enter your password"
							ref={passwordRef}
							onChange={validateData}
						/>
						{errors.password && (
							<div className="alert alert-danger" role="alert">
								{errors.password}
							</div>
						)}
					</div>
				</div>
				<div className="p-2">
					<button
						type="submit"
						className={`btn btn-secondary ${!isFormValid ? "disabled" : ""}`}
						onClick={(e) => handleSubmit(e)}
					>
						Submit
					</button>
				</div>
			</div>
		</>
	);
};

export default SignUp;
