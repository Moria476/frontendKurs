import { useEffect, useState } from "react";
import { AppLayout } from "./AppLayout/AppLayout";
import { CartItemEdit } from "./components/CartItemEdit/CartItemEdit";
import { ProductItem } from "./components/ProductItem/ProductItem";
import { ProductPreview } from "./components/ProductPreview/ProductPreview";
import { GridContainer } from "./components/GridContainer/GridContainer";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { UserItem } from "./components/UserItem/UserItem";
import { delay } from "./delay";
import { Spinner } from "./Spinner/Spinner";

const getAllUsers = () => fetch("https://dummyjson.com/users").then(delay(800));

const findUsers = (query) =>
  fetch(`https://dummyjson.com/users/search?q=${query}`).then(delay(800));

const getUserCarts = (userId) =>
  fetch(`https://dummyjson.com/carts/user/${userId}`).then(delay(400));

const getProductPreview = (productId) =>
  fetch(`https://dummyjson.com/products/${productId}`).then(delay(400));

const App = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(null);
  const [products, setProducts] = useState(null);
  const [productPreview, setProductPreview] = useState(null);

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setUsers(null);
    findUsers(search)
      .then((x) => x.json())
      .then((x) => x.users)
      .then(setUsers);
  }, [search]);

  useEffect(() => {
    setProducts(null);
    selectedUser !== null &&
      getUserCarts(selectedUser)
        .then((x) => x.json())
        .then((x) => x.carts[0]?.products ?? [])
        .then(setProducts);
  }, [selectedUser]);

  useEffect(() => {
    setProductPreview(null);
    selectedProduct !== null &&
      getProductPreview(selectedProduct)
        .then((x) => x.json())
        .then(setProductPreview);
  }, [selectedProduct]);

  return (
    <AppLayout
      usersColumn={
        <>
          <SearchForm onSearch={(newSearch) => setSearch(newSearch)} />
          {users === null ? (
            <Spinner />
          ) : (
            <GridContainer>
              {users.map((p) => (
                <UserItem
                  key={p.id}
                  {...p}
                  onClick={() => setSelectedUser(p.id)}
                />
              ))}
            </GridContainer>
          )}
        </>
      }
      cartColumn={
        <>
          {selectedUser === null ? null : products === null ? (
            <Spinner />
          ) : (
            <GridContainer>
              {products.map((p) => (
                <ProductItem
                  key={p.id}
                  {...p}
                  onClick={() => setSelectedProduct(p.id)}
                />
              ))}
            </GridContainer>
          )}
        </>
      }
      productColumn={
        <>
          {selectedProduct !== null && products !== null && (
            <CartItemEdit
              cartItem={products.find((p) => p.id === selectedProduct)}
              onChange={(newData) => {
                console.log(newData);
                setProducts(
                  products.map((p) => (p.id === newData.id ? newData : p))
                );
              }}
            />
          )}
          {selectedProduct === null ? null : productPreview === null ? (
            <Spinner />
          ) : (
            <ProductPreview {...productPreview} />
          )}
        </>
      }
    />
  );
};

export default App;
