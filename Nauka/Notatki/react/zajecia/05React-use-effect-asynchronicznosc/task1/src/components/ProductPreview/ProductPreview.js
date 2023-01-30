import { GridContainer } from "../GridContainer/GridContainer";
import styles from "./ProductPreview.module.css";

export const ProductPreview = ({ id, title, images, ...rest }) => (
  <div className={styles.root} {...rest}>
    <div className={styles.title}>{title}</div>
    <GridContainer>
      {images.map((image) => (
        <img
          key={image}
          className={styles.image}
          alt="product preview"
          src={image}
        />
      ))}
    </GridContainer>
  </div>
);
