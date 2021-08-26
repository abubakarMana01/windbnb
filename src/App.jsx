import React from "react";

import "./App.css";
import Apartments from "./components/Apartments/Apartments";
import Header from "./components/Header/Header.jsx";
import Footer from "./Footer/Footer";

function App() {
	return (
		<div className="app">
			<Header />
			<Apartments />
			<Footer />
		</div>
	);
}

export default App;
