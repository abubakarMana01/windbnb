import "./Header.css";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Header = () => {
	return (
		<nav className="nav">
			<img src="./logo.svg" alt="logo" />
			<SearchBar />
		</nav>
	);
};

export default Header;
