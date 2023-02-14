import styles from "./CartItemEdit.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const CartItemEdit = ({ cartItem, onChange }) => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      title: "tytuł",
      quantity: 10,
      discountedPrice: 90,
      total: 100,
    },
  });
  //formstate do errorow
  // handlesubmit do robienia magi po nacisnieciu submit
  // register to jakos do rejestrowania w inputach po nacisnieciu submit

  const { errors } = formState;

  console.log(errors);
  const onSubmit = (event) => {
    console.log("Wyślij", event);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", {
          required: true,
          minLength: 5,
          maxLength: 400,

          //wymagania by pole zostlao zakceptowane
        })}
      />
      {errors.title && <span>Popraw tytuł</span>}
      <input
        {...register("quantity", {
          min: 0,
        })}
        type="number"
      />
      {errors.quantity && <span>Popraw quanitty</span>}
      <input
        {...register("discountedPrice", {
          min: 0,
        })}
        type="number"
      />
      {errors.discountedPrice && <span>Popraw discountedPrice</span>}
      <input
        {...register("total", {
          min: 0,
        })}
        type="number"
      />
      {errors.total && <span>Popraw total</span>}
      <button type="submit">Zapisz</button>
    </form>
  );
};
