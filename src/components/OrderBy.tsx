import dropdownItems from "../services/order-by";

interface Props {
	selectedOrderById: number;
	orderBy: (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: number
	) => void;
}

const OrderBy = ({ selectedOrderById, orderBy }: Props) => {
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
				{`Order by: `}
				{dropdownItems.find((item) => item.id === selectedOrderById)?.name ||
					"Relevance"}
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{dropdownItems.map((item) => (
					<a
						key={item.id}
						className="dropdown-item"
						href=""
						onClick={(e) => orderBy(e, item.id)}
					>
						{item.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default OrderBy;
