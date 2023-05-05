import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.webp";

interface Props {
	colorMode: string;
	setColorMode: (colorMode: string) => void;
}

const NavBar = ({ colorMode, setColorMode }: Props) => {
	const toggleColorMode = () => {
		const newColorMode = colorMode === "dark" ? "light" : "dark";
		document.documentElement.setAttribute("data-bs-theme", newColorMode);
		setColorMode(newColorMode);
	};

	return (
		<>
			<img src={logo} alt="logo" className={styles.logo} />
			<button
				type="button"
				className="btn btn-primary"
				onClick={toggleColorMode}
			>
				Change Color Mode
			</button>
		</>
	);
};

export default NavBar;
