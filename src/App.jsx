import React from "react";
import "./App.css";
import Apartments from "./components/Apartments/Apartments";
import Header from "./components/Header/Header.jsx";

function App() {
	return (
		<div className="app">
			<Header />
			<Apartments />
		</div>
	);
}

export default App;
