import "./SearchBar.css";

const SearchBar = () => {
	return (
		<div className="searchBarContainer">
			<div className="location-container">
				<p className="location-text">Helsinki, Finland</p>
			</div>
			<div className="add-guests-container">
				<p className="add-guests-text">Add guests</p>
			</div>
			<div>
				<img src="./search.svg" alt="" />
			</div>
		</div>
	);
};

export default SearchBar;
