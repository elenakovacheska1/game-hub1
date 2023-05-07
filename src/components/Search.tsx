import { useRef, RefObject } from "react";
import { BsSearchHeart } from "react-icons/bs";

interface Props {
	searchGame: (ref: RefObject<HTMLInputElement>) => void;
}

const Search = ({ searchGame }: Props) => {
	const searchRef = useRef<HTMLInputElement>(null);

	return (
		<div className="input-group mb-3">
			<div className="input-group-prepend">
				<span className="input-group-text" id="search">
					<BsSearchHeart size={42} />
				</span>
			</div>
			<input
				ref={searchRef}
				onChange={() => searchGame(searchRef)}
				type="text"
				className="form-control"
				placeholder="Game Name"
				aria-label="Game Name"
				aria-describedby="search"
			/>
		</div>
	);
};

export default Search;
