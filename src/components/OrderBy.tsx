import React from "react";

const OrderBy = () => {
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
				Order by: Relevance
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a className="dropdown-item" href="#">
					Relevance
				</a>
				<a className="dropdown-item" href="#">
					Date added
				</a>
				<a className="dropdown-item" href="#">
					Name
				</a>
				<a className="dropdown-item" href="#">
					Release date
				</a>
				<a className="dropdown-item" href="#">
					Popularity
				</a>
				<a className="dropdown-item" href="#">
					Average rating
				</a>
			</div>
		</div>
	);
};

export default OrderBy;
