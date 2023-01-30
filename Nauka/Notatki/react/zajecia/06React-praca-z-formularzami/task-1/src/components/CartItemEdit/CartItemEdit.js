import styles from "./CartItemEdit.module.css";

export const CartItemEdit = ({ cartItem, onChange }) => {
  return (
    <form className={styles.root}>
      <input />
      <input type="number" />
      <input type="number" />
      <input type="number" />

      <button type="submit">Zapisz</button>
    </form>
  );
};
