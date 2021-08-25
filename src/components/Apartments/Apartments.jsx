import "./Apartments.css";
import ApartmentCard from "./ApartmentCard";

import data from "../../stays.json";

const Apartments = () => {
	return (
		<div className="container">
			<div className="header-container">
				<h1 className="header">Stays in Finland</h1>
				<p className="number-of-stays">12+ stays</p>
			</div>
			<div className="apartments-container">
				{data.map(stay => (
					<ApartmentCard data={stay} />
				))}
			</div>
		</div>
	);
};

export default Apartments;
