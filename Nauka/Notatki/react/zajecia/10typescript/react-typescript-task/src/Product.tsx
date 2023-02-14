// Challenge: Otypuj komponent by mógł być wyświetlony jak poniżej
//
// <Product
//   name="Shampoo"
//   price={2.99}
//   images={["image-1.png", "image-2.png"]}
// />
import { useState } from "react";
interface Props {
  name: string;
  price: number;
  images: string[];
}

export function Product({ name, price, images }: Props) {
  const [names, setNames] = useState<string[]>(["", ""]);
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map((src) => (
        <img src={src} />
      ))}
    </div>
  );
}
