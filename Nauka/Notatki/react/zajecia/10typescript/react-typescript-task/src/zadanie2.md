// Challenge: Fix the addImage handler

import { useState } from "react";

type ProductProps = {
  name: string;
  price: number;
};

export function Product({ name, price }: ProductProps) {
  const [images, setImages] = useState([]);

  const addImage = () => {
    setImages(images.concat(`image-${images.length + 1}.png`));
  };

  return (
    <div>
      <div>
        {name} ${price}
      </div>
      <button onClick={addImage}>Add image</button>
      {images.map((src) => (
        <img src={src} />
      ))}
    </div>
  );
}