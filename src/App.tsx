import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import Search from "./components/Search";
import FilterPlatform from "./components/FilterPlatform";
import { useState, RefObject } from "react";
import OrderBy from "./components/OrderBy";
import { useNavigate } from "react-router-dom";

function App() {
	const [colorMode, setColorMode] = useState("dark");
	const [selectedGenreId, setSelectedGenreId] = useState(0);
	const [selectedPlatformId, setSelectedPlatformId] = useState(0);
	const [selectedOrderById, setSelectedOrderById] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const filterGenre = (id: number) => {
		setSelectedGenreId(id);
		setSelectedPlatformId(0);
		setSelectedOrderById(0);
		setSearchTerm("");
	};

	const filterPlatform = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: number
	) => {
		e.preventDefault();
		setSelectedPlatformId(id);
	};

	const orderBy = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: number
	) => {
		e.preventDefault();
		setSelectedOrderById(id);
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
						<Search searchTerm={searchTerm} searchGame={searchGame} />
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
								<FilterPlatform
									selectedPlatformId={selectedPlatformId}
									filterPlatform={filterPlatform}
								/>
							</div>
							<div className="p-2 bd-highlight">
								<OrderBy
									selectedOrderById={selectedOrderById}
									orderBy={orderBy}
								/>
							</div>
							<div className="p-2 bd-highlight">
								<button
									type="button"
									className="btn btn-secondary"
									onClick={() => navigate("/signup")}
								>
									Sign Up
								</button>
							</div>
							<div className="p-2 bd-highlight">
								<button
									type="button"
									className="btn btn-secondary"
									onClick={() => navigate("/login")}
								>
									Login
								</button>
							</div>
						</div>
						<GameGrid
							genreId={selectedGenreId}
							searchTerm={searchTerm}
							platformId={selectedPlatformId}
							orderById={selectedOrderById}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
