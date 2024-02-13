import React from "react";
import styles from "./Button.module.css";

function Button({ children, bgColor, ...rest }) {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className={styles.button}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
