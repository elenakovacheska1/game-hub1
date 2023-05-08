import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Platforms {
	id: number;
	name: string;
	slug: string;
}

interface Props {
	selectedPlatformId: number;
	filterPlatform: (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: number
	) => void;
}

const FilterPlatform = ({ selectedPlatformId, filterPlatform }: Props) => {
	const [platforms, setPlatforms] = useState<Platforms[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get("/platforms")
			.then((res) => setPlatforms(res.data.results))
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	return (
		<>
			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}
			{platforms.length !== 0 ? (
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						{platforms.find((p) => p.id === selectedPlatformId)?.name ||
							"Platform"}
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{platforms.map((item) => (
							<a
								key={item.id}
								className="dropdown-item"
								href=""
								onClick={(e) => filterPlatform(e, item.id)}
							>
								{item.name}
							</a>
						))}
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default FilterPlatform;
