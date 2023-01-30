import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./CartItemEdit.module.css";

export const CartItemEdit = ({ cartItem, onChange }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: cartItem });

  useEffect(() => {
    reset(cartItem);
  }, [cartItem]);
  const onSubmit = (data) => onChange(data);

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", {
          required: true,
          minLength: 5,
          maxLength: 40,
        })}
      />
      <input
        type="number"
        {...register("quantity", {
          required: true,
          min: 0,
          valueAsNumber: true,
        })}
      />
      <input
        type="number"
        {...register("discountedPrice", {
          required: true,
          min: 0,
          valueAsNumber: true,
        })}
      />
      <input
        type="number"
        {...register("total", {
          required: true,
          min: 0,
          valueAsNumber: true,
        })}
      />

      {errors.title && <span>Invalid title</span>}
      {errors.quantity && <span>Invalid quantity</span>}
      {errors.discountedPrice && <span>Invalid discounted price</span>}
      {errors.total && <span>Invalid total price</span>}

      <button type="submit">Zapisz</button>
    </form>
  );
};
