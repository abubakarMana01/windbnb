import styles from "./Drawer.module.css";
import SingleLocation from "./SingleLocation";

import stays from "../../stays.json";

const Drawer = () => {
	const openDrawer = e => {
		const drawer = document.getElementById("drawer-bg");
		if (e.target === drawer) {
			if (drawer.style.visibility === "visible") {
				drawer.style.opacity = "0";
				drawer.style.visibility = "hidden";
			} else {
				drawer.style.opacity = "1";
				drawer.style.visibility = "visible";
			}
		}
	};

	return (
		<div onClick={openDrawer} id="drawer-bg" className={styles.drawerBg}>
			<div className={styles.drawer}>
				<div className={styles.filtersContainer}>
					<div className={styles.locationContainer}>
						<h3>Location</h3>
						<input
							type="text"
							name="location"
							id="location"
							value="Abuja, Nigeria"
							onChange={() => {}}
						/>
					</div>
					<div className={styles.guestsContainer}>
						<h3>Guests</h3>
						<input
							type="text"
							name="guests"
							id="guests"
							placeholder="Add guests"
						/>
					</div>
					<div className={styles.searchContainer}>
						<button>
							<img src="./search-white.svg" alt="search-icon" />
							Search
						</button>
					</div>
				</div>

				<ul className={styles.locationsList}>
					<SingleLocation text="Lagos, Nigeria" />
					<SingleLocation text="Port-Harcourt, Nigeria" />
					<SingleLocation text="Yola, Nigeria" />
					<SingleLocation text="Kano, Nigeria" />
				</ul>
			</div>
		</div>
	);
};

export default Drawer;
