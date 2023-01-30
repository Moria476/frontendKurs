import { useState } from "react";
import styles from "./SearchForm.module.css";
export const SearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(search);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input
        className={styles.field}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      <button>Szukaj</button>
    </form>
  );
};
