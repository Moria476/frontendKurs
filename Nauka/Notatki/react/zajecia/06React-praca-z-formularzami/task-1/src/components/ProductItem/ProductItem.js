import styles from "./ProductItem.module.css";
export const ProductItem = ({
  id,
  title,
  price,
  quantity,
  discountedPrice,
  discountedPercentage,
  total,
  ...rest
}) => (
  <div className={styles.root} {...rest}>
    <h4>{title}</h4>
    <p>
      Price: {price}
    </p>
    <p>Quantity: {quantity}</p>
    <p>Total: {total} ({discountedPrice} with discount)</p>
  </div>
);
