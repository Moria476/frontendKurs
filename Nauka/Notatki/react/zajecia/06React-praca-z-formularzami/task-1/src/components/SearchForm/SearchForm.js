import styles from "./SearchForm.module.css";
export const SearchForm = ({ onSearch }) => {
  return (
    <form className={styles.root}>
      <input className={styles.field} />
      <button>Szukaj</button>
    </form>
  );
};
