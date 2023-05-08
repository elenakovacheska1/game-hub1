import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import getCroppedImageUrl from "../services/image-url";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import PlatformIcons from "./PlatformIcons";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../styles/GameGrid.module.css";

interface Props {
	id: number;
	descriptionLength: number;
}

interface Platform {
	id: number;
	slug: string;
	name: string;
}

interface Requirements {
	minimum: string;
	recommended: string;
}

interface Platforms {
	platform: Platform;
	released_at: string;
	requirements: Requirements[];
}

interface GameDetails {
	id: number;
	name: string;
	description: string;
	description_raw: string;
	background_image: string;
	rating_top: number;
	platforms: Platforms[];
}

const GameCard = ({ id, descriptionLength }: Props) => {
	const [gameDetails, setGameDetails] = useState<GameDetails>();
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		apiClient
			.get(`/games/${id}`)
			.then((res) => {
				setGameDetails(res.data);
			})
			.catch((err) => {
				setError(err);
				navigate("/");
			});
	}, [id, navigate]);

	const getStars = () => {
		if (!gameDetails) return "";
		return Array(gameDetails.rating_top)
			.fill("")
			.map((_, i) => (
				<span key={i}>
					<IconContext.Provider value={{ color: "gold", size: "25px" }}>
						{AiFillStar()}
					</IconContext.Provider>
				</span>
			));
	};

	const platforms = gameDetails?.platforms
		.map((item) => item.platform)
		.map((p) => p.slug);

	return (
		<>
			{gameDetails && (
				<>
					<div
						className={`card mb-3 me-3 ${styles.games} ${
							location.pathname !== "/" ? styles.game : ""
						}`}
						onClick={() => navigate("/")}
					>
						{error}
						<img
							className={`card-img-top ${
								location.pathname !== "/" ? styles.imgSize : ""
							}`}
							src={getCroppedImageUrl(gameDetails.background_image)}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{gameDetails.name}</h5>
							<p className="card-text">
								{gameDetails.description_raw.substring(0, descriptionLength) +
									"..."}
							</p>
							<p className="card-text">{getStars()}</p>
							<p className="card-text">
								{platforms && <PlatformIcons platforms={platforms} />}
							</p>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default GameCard;
