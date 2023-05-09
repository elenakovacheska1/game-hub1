import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import Search from "./components/Search";
import FilterPlatform from "./components/FilterPlatform";
import { useState, RefObject, useEffect } from "react";
import OrderBy from "./components/OrderBy";
import { useNavigate } from "react-router-dom";

function App() {
	const [selectedGenreId, setSelectedGenreId] = useState(0);
	const [selectedPlatformId, setSelectedPlatformId] = useState(0);
	const [selectedOrderById, setSelectedOrderById] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const getCurrentUser = () => {
		const userObj = localStorage.getItem("user");
		if (userObj) return JSON.parse(userObj).name;
		return "";
	};

	const [currentUser, setCurrentUser] = useState(getCurrentUser());

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
						<NavBar />
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
						<div className="filter_platform d-flex flex-row bd-highlight mb-3 flex-wrap align-items-center">
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
								{!currentUser ? (
									<button
										type="button"
										className="btn btn-secondary"
										onClick={() => navigate("/login")}
									>
										Login
									</button>
								) : (
									<button
										type="button"
										className="btn btn-secondary"
										onClick={() => {
											setCurrentUser("");
											localStorage.removeItem("user");
										}}
									>
										Logout
									</button>
								)}
							</div>
							<div className="p-2 bd-highlight welcome">
								{currentUser ? (
									<div className="alert alert-success" role="alert">
										{`Welcome ${currentUser}!`}
									</div>
								) : (
									<div className="alert alert-success" role="alert">
										{`Welcome User!`}
									</div>
								)}
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
