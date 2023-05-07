import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.webp";
import name from "../assets/name.png";

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
			<img src={name} alt="title" className={styles.title} />
			<button
				type="button"
				className="btn btn-primary mb-3"
				onClick={toggleColorMode}
			>
				Toggle Color Mode
			</button>
			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					role="switch"
					id="flexSwitchCheckChecked"
					onClick={toggleColorMode}
				/>
				<label className="form-check-label" htmlFor="flexSwitchCheckChecked">
					Checked switch checkbox input
				</label>
			</div>
		</>
	);
};

export default NavBar;
