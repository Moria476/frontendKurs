import styles from "./UserItem.module.css";
export const UserItem = ({
  id,
  username,
  firstName,
  lastName,
  email,
  image,
  phone,
  ...rest
}) => (
  <div className={styles.root} {...rest}>
    <h4>
      {firstName} {lastName} ({username})
    </h4>
    <p style={{ overflowWrap: "anywhere" }}>{email}</p>
    <p>Phone: {phone}</p>
    <img className={styles.avatar} alt="user avatar" src={image} />
  </div>
);
