import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import getCroppedImageUrl from "../services/image-url";
import styles from "../styles/Genres.module.css";

interface Genres {
	id: number;
	name: string;
	slug: string;
	image_background: string;
}

interface GenreTypes {
	id: number;
	name: string;
	slug: string;
	image_background: string;
}

interface Props {
	selectedGenreId: number;
	filterGenre: (genreId: number, genreName: string) => void;
}

const Genres = ({ selectedGenreId, filterGenre }: Props) => {
	const [genres, setGenres] = useState<GenreTypes[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get("/genres")
			.then((res) => setGenres(res.data.results))
			.catch((err) => setError(err.message));
	}, []);

	return (
		<>
			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}
			{genres &&
				genres.map((genre, id) => (
					<div
						key={id}
						className={`w-100 card mb-3 rounded ${styles.genres}${
							selectedGenreId === genre.id ? " " + styles.active : ""
						}`}
						onClick={() => filterGenre(genre.id, genre.name)}
					>
						<img
							className="card-img-top"
							src={getCroppedImageUrl(genre.image_background)}
							alt="Card image cap"
						/>
						<div className="card-body">
							<p className="card-text">{genre.name}</p>
						</div>
					</div>
				))}
		</>
	);
};

export default Genres;
