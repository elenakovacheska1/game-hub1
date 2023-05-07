import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { useState } from "react";

function App() {
	const [colorMode, setColorMode] = useState("dark");
	const [selectedGenreId, setSelectedGenreId] = useState(4);

	const filterGenre = (id: number) => {
		setSelectedGenreId(id);
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<NavBar colorMode={colorMode} setColorMode={setColorMode} />
					</div>
				</div>
				<div className="row">
					<div className="col-3 bordered">
						<p>Filter by:</p>
						<Genres
							selectedGenreId={selectedGenreId}
							filterGenre={filterGenre}
						/>
					</div>
					<div className="col-9">
						<GameGrid genreId={selectedGenreId} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
