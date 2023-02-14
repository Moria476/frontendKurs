import styles from "./UserItem.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";

export const UserItem = ({
  id,
  username,
  firstName,
  lastName,
  email,
  image,
  phone,
  ...rest
}) => {
  const location = useLocation();

  console.log("location", location);

  return (
    <NavLink
      to={`/users/${id}${location.search}`}
      className={({ isActive }) =>
        `${styles.root} ${isActive ? styles.active : ""}`
      }
      {...rest}>
      <h4>
        {firstName} {lastName} ({username})
      </h4>
      <p style={{ overflowWrap: "anywhere" }}>{email}</p>
      <p>Phone: {phone}</p>
      <img className={styles.avatar} alt="user avatar" src={image} />
    </NavLink>
  );
};
