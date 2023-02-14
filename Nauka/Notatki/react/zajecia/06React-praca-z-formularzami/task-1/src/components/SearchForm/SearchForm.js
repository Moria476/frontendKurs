import { useForm } from "react-hook-form";
import styles from "./SearchForm.module.css";
export const SearchForm = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();

  const send = (values) => {
    // console.log("send", values.query);
    onSearch(values.query);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(send)}>
      <input className={styles.field} {...register("query")} />
      <button>Szukaj</button>
    </form>
  );
};
