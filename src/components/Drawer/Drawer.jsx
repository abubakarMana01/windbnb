import styles from "./Drawer.module.css";
import SingleLocation from "./SingleLocation";
import SingleGuestComponent from "./SingleGuestComponent";

const Drawer = () => {
  const openDrawer = (e) => {
    const guestsInput = document.querySelector("#guests");
    const locationInput = document.querySelector("#location");

    const guestsList = document.querySelector("#guestsList");
    if (document.activeElement === guestsInput) {
      console.log(guestsList);
      guestsList.style.opacity = 1;
      guestsList.style.pointerEvents = "all";
    } else {
      console.log(guestsList);
      guestsList.style.opacity = 0;
      guestsList.style.pointerEvents = "none";
    }

    const locationsList = document.querySelector("#locationsList");
    if (document.activeElement === locationInput) {
      console.log(locationsList);
      locationsList.style.opacity = 1;
      locationsList.style.pointerEvents = "all";
    } else {
      console.log(locationsList);
      locationsList.style.opacity = 0;
      locationsList.style.pointerEvents = "none";
    }

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

        <div
          style={{
            alignSelf: "flex-start",
            marginLeft: "5%",
            display: "flex",
            width: "90%",
          }}
        >
          <ul id="locationsList" className={styles.locationsList}>
            <SingleLocation text="Lagos, Nigeria" />
            <SingleLocation text="Port-Harcourt, Nigeria" />
            <SingleLocation text="Yola, Nigeria" />
            <SingleLocation text="Kano, Nigeria" />
          </ul>

          <ul id="guestsList" className={styles.guestsList}>
            <SingleGuestComponent />
            <SingleGuestComponent />
          </ul>
          <ul id="searchList" className={styles.searchList}></ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
