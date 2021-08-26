import styles from "./Drawer.module.css";

const SingleLocation = ({ text }) => {
	return (
		<li className={styles.location}>
			<i className="fas fa-map-marker-alt fa-lg"></i>
			<p className={styles.locationText}>{text}</p>
		</li>
	);
};

export default SingleLocation;
