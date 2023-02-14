// Challenge: the two errors in useImages and Product

import { useState } from "react";

type ProductProps = {
  name: string,
  price: number,
  images: string[],
};

function useImages(initialImages) {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    setImages(images.concat(`image-${images.length + 1}.png`));
  };
  return { images, setImages };
}

export function Product({ name, price, images: initialImages }: ProductProps) {
  const { images, addImage } = useImages(initialImages);

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