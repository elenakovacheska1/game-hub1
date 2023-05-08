/* eslint-disable no-mixed-spaces-and-tabs */
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";
import dropdownItems from "../services/order-by";
import { useNavigate } from "react-router-dom";

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
	searchTerm: string;
	platformId: number;
	orderById: number;
}

const GameGrid = ({ genreId, searchTerm, platformId, orderById }: Props) => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	let url = "/games";
	if (genreId) {
		url = `/games?genres=${genreId}`;
	}
	if (searchTerm) {
		const slug = searchTerm.split(" ").join("-").toLowerCase();
		url = `/games?search=${slug}`;
	}
	if (platformId) {
		url = `/games?platforms=${platformId}`;
	}
	if (orderById) {
		const slug = dropdownItems.find((item) => item.id === orderById)?.slug;
		if (url === "/games") {
			url += `?ordering=${slug}`;
		} else {
			url += `&ordering=${slug}`;
		}
	}

	useEffect(() => {
		apiClient
			.get<FetchGamesResponse>(url)
			.then((res) => {
				setGames(res.data.results);
			})
			.catch((err) => setError(err.message));
	}, [url]);

	return (
		<>
			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}
			<ul className="row list-group-horizontal">
				{games.length
					? games.map((game) => (
							<li
								className="col-6 list-group-item"
								key={game.id}
								onClick={() => navigate(`/${game.id}`)}
							>
								<GameCard id={game.id} descriptionLength={100} />
							</li>
					  ))
					: "No games found."}
			</ul>
		</>
	);
};

export default GameGrid;
