import React from "react";

const FilterPlatform = () => {
	return (
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
				<a className="dropdown-item" href="#">
					Action
				</a>
				<a className="dropdown-item" href="#">
					Another action
				</a>
				<a className="dropdown-item" href="#">
					Something else here
				</a>
			</div>
		</div>
	);
};

export default FilterPlatform;
