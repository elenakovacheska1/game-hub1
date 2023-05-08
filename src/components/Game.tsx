import { useLocation } from "react-router-dom";
import GameCard from "./GameCard";

const Game = () => {
	const gameId = parseInt(useLocation().pathname.substring(1));
	return <GameCard id={gameId} descriptionLength={5000} />;
};

export default Game;
