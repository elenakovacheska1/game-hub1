import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.webp";
import name from "../assets/name.png";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

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
					<BsMoonStarsFill size={70} />
				</div>
				<div className="p-2 ms-4 me-4">
					<div className="form-check form-switch">
						<input
							className={`form-check-input ${styles.switch}`}
							type="checkbox"
							role="switch"
							id="flexSwitchCheckChecked"
							onClick={toggleColorMode}
						/>
					</div>
				</div>
				<div className="p-2">
					<BsSunFill size={70} />
				</div>
			</div>
		</>
	);
};

export default NavBar;
