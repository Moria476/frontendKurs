import styles from "./AppLayout.module.css";
export const AppLayout = ({ usersColumn, cartColumn, productColumn }) => (
  <div className={styles.root}>
    <div className={styles.usersColumn}>{usersColumn}</div>
    <div className={styles.cartColumn}>{cartColumn}</div>
    <div className={styles.productColumn}>{productColumn}</div>
  </div>
);
