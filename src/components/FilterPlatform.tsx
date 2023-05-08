import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Games {
	id: number;
	name: string;
	slug: string;
}

interface Props {
	filterPlatform: (id: number) => void;
}

const FilterPlatform = ({ filterPlatform }: Props) => {
	const [platforms, setPlatforms] = useState<Games[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get("/platforms")
			.then((res) => setPlatforms(res.data.results))
			.catch((err) => {
				setError(err);
			});
	}, []);

	return (
		<>
			{error}
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
						Platform
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{platforms.map((item) => (
							<a
								key={item.id}
								className="dropdown-item"
								href="#"
								onClick={() => filterPlatform(item.id)}
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
