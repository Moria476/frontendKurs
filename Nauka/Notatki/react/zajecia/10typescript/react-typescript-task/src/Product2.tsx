// Challenge: the two errors in useImages and Product

import { useState } from "react";

type ProductProps = {
  name: string;
  price: number;
  images: string[];
};

function useImages(initialImages: ProductProps["images"]) {
  const [returnedImages, setImages] = useState(initialImages);

  const addImage = () => {
    setImages(returnedImages.concat(`image-${returnedImages.length + 1}.png`));
  };
  return { returnedImages, addImage };
}

export function Product({ name, price, images }: ProductProps) {
  const { returnedImages, addImage } = useImages(images);

  return (
    <div>
      <div>
        {name} ${price}
      </div>
      <button onClick={addImage}>Add image</button>
      {returnedImages.map((src) => (
        <img src={src} />
      ))}
    </div>
  );
}
