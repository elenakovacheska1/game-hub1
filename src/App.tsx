import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import Search from "./components/Search";
import FilterPlatform from "./components/FilterPlatform";
import { useState, RefObject } from "react";
import OrderBy from "./components/OrderBy";

function App() {
	const [colorMode, setColorMode] = useState("dark");
	const [selectedGenreId, setSelectedGenreId] = useState(0);
	const [selectedPlatformId, setSelectedPlatformId] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");

	const filterGenre = (id: number) => {
		setSelectedGenreId(id);
	};

	const filterPlatform = (id: number) => {
		setSelectedPlatformId(id);
	};
	const searchGame = (ref: RefObject<HTMLInputElement>) => {
		if (!ref.current) return;
		setSearchTerm(ref.current.value);
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<NavBar colorMode={colorMode} setColorMode={setColorMode} />
						<Search searchGame={searchGame} />
					</div>
				</div>
				<div className="row">
					<div className="col-3 bordered">
						<h1>Genres</h1>
						<p className="filter_by">Filter by:</p>
						<Genres
							selectedGenreId={selectedGenreId}
							filterGenre={filterGenre}
						/>
					</div>
					<div className="col-9">
						<h1 className="games_title">Games</h1>
						<div className="filter_platform d-flex flex-row bd-highlight mb-3">
							<div className="p-2 bd-highlight">
								<FilterPlatform filterPlatform={filterPlatform} />
							</div>
							<div className="p-2 bd-highlight">
								<OrderBy />
							</div>
						</div>
						<GameGrid
							genreId={selectedGenreId}
							searchTerm={searchTerm}
							platformId={selectedPlatformId}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
