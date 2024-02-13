import React from "react";
import styles from "./InputText.module.css";

function InputText({ ...rest }) {
  return <input type="text" {...rest} className={styles.input} />;
}

export default InputText;
