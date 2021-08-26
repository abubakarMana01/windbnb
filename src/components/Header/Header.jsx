import "./Header.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Drawer from "../Drawer/Drawer.jsx";

const Header = () => {
	return (
		<nav className="nav">
			<img src="./logo.svg" alt="logo" />
			<SearchBar />
			<Drawer />
		</nav>
	);
};

export default Header;
