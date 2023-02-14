// Challenge: Otypuj komponent by mógł być wyświetlony jak poniżej
//
// <Product
//   name="Shampoo"
//   price={2.99}
//   images={["image-1.png", "image-2.png"]}
// />

interface Props {
  name: string;
  price: number;
  images: string[];
  // images:{
  //     src: string;
  //     alt: string;
  // }[]
}

export const Product = ({ name, price, images }: Props) => {
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map(
        (src) => (
          <img src={src} />
        )
        //   {images.map((img) => (
        //     <img src={img.src} alt={img.alt} />
        //   )
      )}
    </div>
  );
};
