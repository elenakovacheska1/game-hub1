import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
	const [colorMode, setColorMode] = useState("dark");

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col temp">
						<NavBar colorMode={colorMode} setColorMode={setColorMode} />
					</div>
				</div>
				<div className="row">
					<div className="col-3 temp">Aside</div>
					<div className="col-9 temp">
						<GameGrid />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
