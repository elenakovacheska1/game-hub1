import { useLocation } from "react-router-dom";
import GameCard from "./GameCard";
import NavBar from "./NavBar";

const Game = () => {
	const gameId = parseInt(useLocation().pathname.substring(1));
	return (
		<>
			<NavBar />
			<GameCard id={gameId} descriptionLength={5000} />
		</>
	);
};

export default Game;
