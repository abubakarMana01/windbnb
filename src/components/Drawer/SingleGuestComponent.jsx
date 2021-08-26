import React, { useState } from "react";

import styles from "./Drawer.module.css";

export default function SingleGuestComponent() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        return 0;
      } else {
        return prevCount - 1;
      }
    });
  };

  return (
    <div className={styles.SingleGuestComponentContainer}>
      <h3>Adults</h3>
      <p>Ages 13 or above</p>

      <div className={styles.buttonsContainer}>
        <button onClick={handleDecrement}>-</button>
        <h3>{count}</h3>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
