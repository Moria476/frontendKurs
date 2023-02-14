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
import {
  Link,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { CartPage } from "./pages/CartPage";

const getAllUsers = () => fetch("https://dummyjson.com/users").then(delay(800));

const findUsers = (query) =>
  fetch(`https://dummyjson.com/users/search?q=${query}`).then(delay(800));

// const getUserCarts = (userId) =>
//   fetch(`https://dummyjson.com/carts/user/${userId}`).then(delay(400));

//zabrano do CartPage

const getProductPreview = (productId) =>
  fetch(`https://dummyjson.com/products/${productId}`).then(delay(400));

const App = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const setSearch = (newValue) => {
    setSearchParams({ newValue });
  };
  console.log("search params", search);

  // const [search, setSearch] = useState("");
  const [users, setUsers] = useState(null);
  // const [products, setProducts] = useState(null);
  //zabrano do CartPage
  const [productPreview, setProductPreview] = useState(null);

  //const [selectedUser, setSelectedUser] = useState(null);
  //usuniete bo wybieranie usera ma odbywac sie przez Link
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setUsers(null);
    findUsers(search)
      .then((x) => x.json())
      .then((x) => x.users)
      .then(setUsers);
  }, [search]);

  // useEffect(() => {
  //   setProducts(null);
  //   selectedUser !== null &&
  //     getUserCarts(selectedUser)
  //       .then((x) => x.json())
  //       .then((x) => x.carts[0]?.products ?? [])
  //       .then(setProducts);
  // }, [selectedUser]);
  //przeniesiono do CartPage
  useEffect(() => {
    setProductPreview(null);
    selectedProduct !== null &&
      getProductPreview(selectedProduct)
        .then((x) => x.json())
        .then(setProductPreview);
  }, [selectedProduct]);
  //   const ProductView = () => {
  //     const params = useParams();

  //     console.log(params);

  //     return (
  //       <div>
  //         Produkt: {params.productId}, user: {params.userId}
  //       </div>
  //     );
  //   };

  //   return (
  //     <div>
  //       <nav style={{ display: "flex", flexDirection: "column" }}>
  //         <Link to="/users">Users</Link>
  //         <Link to="/users/4">Specific user</Link>
  //         <Link to="/users/4/products/6">Product for user 6</Link>
  //         <Link to="/users/7/products/222">Product for user 6</Link>
  //         <Link to="/users/8/products/886">Product for user 6</Link>
  //         <Link to="/users/44/products/6425">Product for user 6</Link>
  //         <Link to="/users/4/products/6/edit">Edit product</Link>
  //       </nav>
  //       <div>
  //         <Routes>
  //           <Route path="/users" element={<div>Lista userów</div>} />
  //           <Route
  //             path="/users/:userId"
  //             element={<div>Koszyk usera od id 4</div>}
  //           />
  //           <Route
  //             path="/users/:userId/products/:productId"
  //             element={<ProductView />}
  //           />
  //           <Route
  //             path="/users/:userId/products/:productId/edit"
  //             element={<div>Editing product</div>}
  //           />
  //         </Routes>
  //       </div>
  //     </div>
  //   );
  // };
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
                  //onClick={() => setSelectedUser(p.id)}
                />
              ))}
            </GridContainer>
          )}
        </>
      }
      cartColumn={
        <>
          <Routes>
            <Route path="/" element={<div>wybierz użytkownika</div>} />
            <Route path="/users/:userId/*" element={<CartPage />} />
          </Routes>
          {/* GWiazdka na koncu da nam wyswietlenie podstron */}
          {/* {selectedUser === null ? null : products === null ? (
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
          )}  PRZENIESIONO do CARTPAGE*/}
        </>
      }
      productColumn={
        <>
          {/* {selectedProduct !== null && products !== null && (
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
          )} */}
        </>
      }
    />
  );
};

export default App;
