// Challenge: Type the event param in the onChangeName
// handler and set the name correctly

import { useState } from "react";

export function CreateProductForm() {
  const [name, setName] = useState("");

  const onChangeName = (event) => {
    setName();
  };

  return (
    <form>
      <input onChange={onChangeName} placeholder='Name' value={name} />
    </form>
  );
}
