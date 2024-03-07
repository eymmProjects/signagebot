import React from "react";
import styles from "../_component/css/GradientDivider.module.css";

const Divider = () => {
  return (
    <div className="bg-primary flex w-full">
      <div className={`${styles.container}  max-w-full `}>
        <hr className={`${styles.horizontal} ${styles.gradient} `} />
      </div>
    </div>
  );
};

export default Divider;
