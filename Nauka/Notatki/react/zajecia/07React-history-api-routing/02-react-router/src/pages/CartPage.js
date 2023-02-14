import { Route, Routes, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { delay } from "../delay";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { Spinner } from "../Spinner/Spinner";
import { ProductItem } from "../components/ProductItem/ProductItem";
export const CartPage = () => {
  const getUserCarts = (userId) =>
    fetch(`https://dummyjson.com/carts/user/${userId}`).then(delay(400));

  const { userId } = useParams();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(null);
    //selectedUser !== null &&  zamieniamy na userId przychodzacy z Linku. Nie używamy juz stanu
    userId !== null &&
      getUserCarts(userId)
        .then((x) => x.json())
        .then((x) => x.carts[0]?.products ?? [])
        .then(setProducts);
  }, [userId]);

  return userId === null ? null : products === null ? (
    <Spinner />
  ) : (
    <GridContainer>
      {/* trzeba dopisac do sciezki jesli chcemy by to sie wyswietlilo. Jest to testowe */}
      <Routes>
        <Route path="czesc" element="hej"></Route>
        <Route path="hejho" element="hejho"></Route>
      </Routes>
      {products.map((p) => (
        <ProductItem
          key={p.id}
          {...p}
          // onClick={() => setSelectedProduct(p.id)}
        />
      ))}
    </GridContainer>
  );
};
