import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.webp";
import name from "../assets/name.png";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const NavBar = () => {
	const [colorMode, setColorMode] = useState("dark");
	const toggleColorMode = () => {
		const newColorMode = colorMode === "dark" ? "light" : "dark";
		document.documentElement.setAttribute("data-bs-theme", newColorMode);
		setColorMode(newColorMode);
	};

	return (
		<>
			<div
				className={`d-flex flex-row mb-3 align-items-center ${styles.flexContainer}`}
			>
				<div className="p-2">
					<img src={logo} alt="logo" className={styles.logo} />
				</div>
				<div className="p-2">
					<img src={name} alt="title" className={styles.title} />
				</div>
				<div className="p-2">
					<div style={{ display: "inline-block" }}>
						<BsMoonStarsFill size={60} />
					</div>
					<div
						className="form-check form-switch ms-5 me-5"
						style={{ display: "inline-block" }}
					>
						<input
							className={`form-check-input ${styles.switch}`}
							type="checkbox"
							role="switch"
							id="flexSwitchCheckChecked"
							onClick={toggleColorMode}
						/>
					</div>
					<div style={{ display: "inline-block" }}>
						<BsSunFill size={60} />
					</div>
				</div>
				<div className={`p-2 ms-auto mt-3 ${styles.contact}`}>
					<p>Contact me:</p>
					<p>Elena Kovacheska</p>
					<p>kovacheskaelena@gmail.com</p>
					<p>+389 71 216 556</p>
				</div>
			</div>
		</>
	);
};

export default NavBar;
