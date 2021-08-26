import "./SearchBar.css";

const SearchBar = () => {
	const openDrawer = () => {
		const drawer = document.getElementById("drawer-bg");
		if (drawer.style.visibility === "visible") {
			drawer.style.opacity = "0";
			drawer.style.visibility = "hidden";
		} else {
			drawer.style.opacity = "1";
			drawer.style.visibility = "visible";
		}
	};

	return (
		<div className="searchBarContainer">
			<div className="location-container">
				<p className="location-text">Abuja, Nigeria</p>
			</div>
			<div onClick={openDrawer} className="add-guests-container">
				<p className="add-guests-text">Add guests</p>
			</div>
			<div
				id="toggleSearchButton"
				onClick={openDrawer}
				className="searchContainer"
			>
				<img src="./search.svg" alt="search-icon" />
			</div>
		</div>
	);
};

export default SearchBar;
