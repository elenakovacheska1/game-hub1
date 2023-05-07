import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";

interface Game {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

interface Props {
	genreId: number;
}

const GameGrid = ({ genreId }: Props) => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get<FetchGamesResponse>(`/games?genres=${genreId}`)
			.then((res) => setGames(res.data.results))
			.catch((err) => setError(err.message));
	}, [genreId]);

	return (
		<>
			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}
			<ul className="row list-group-horizontal">
				{games.map((game) => (
					<li className="col-6 list-group-item" key={game.id}>
						<GameCard id={game.id} />
					</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
