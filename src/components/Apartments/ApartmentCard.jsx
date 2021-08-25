import "./Apartments.css";

const Card = ({ data }) => {
	return (
		<div key={Math.random()} className="card">
			<img className="image" alt="apartment" src={data.photo} />
			<div className="apartment-info">
				<div className="apartment-details">
					{data.superHost ? (
						<div className="apartment-class">
							<p>Super host</p>
						</div>
					) : null}
					<p className="apartment-type">
						{data.beds ? data.type + " . " + data.beds + " bed(s)" : data.type}
					</p>
				</div>
				<div className="rating-container">
					<img src="./star.svg" alt="rating" />
					<p className="rating">{data.rating}</p>
				</div>
			</div>
			<h2 className="title">{data.title}</h2>
		</div>
	);
};

export default Card;
