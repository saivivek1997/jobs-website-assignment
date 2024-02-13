import React from "react";
import Button from "./ui/Button";
import styles from "./Search.module.css";
import InputText from "./ui/InputText";

function Search() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className={styles["search"]}>
      <div className={styles["search-container"]}>
        <h1 className={styles["search-title"]}>
          Use Talent Search to Find Candidates
        </h1>
        <form className={styles["search-form"]} onClick={handleSubmit}>
          <InputText placeholder="Search Key Word Or Boolean Search" />
          <InputText placeholder="Location" />
          <Button type="submit" bgColor="#ff6414">
            Search
          </Button>
        </form>
        <h3 className={styles["advanced-search-title"]}>Advanced search</h3>
      </div>
    </div>
  );
}

export default Search;
