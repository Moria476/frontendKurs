import { AppLayout } from "./AppLayout/AppLayout";
import { ProductItem } from "./components/ProductItem/ProductItem";
import { ProductPreview } from "./components/ProductPreview/ProductPreview";
import { GridContainer } from "./components/GridContainer/GridContainer";
import { UserItem } from "./components/UserItem/UserItem";
import { delay } from "./delay";

const getAllUsers = () => fetch("https://dummyjson.com/users").then(delay(800));
const getUserCarts = (userId) =>
  fetch(`https://dummyjson.com/carts/user/${userId}`).then(delay(400));

const getProductPreview = (productId) =>
  fetch(`https://dummyjson.com/products/${productId}`).then(delay(400));

const App = () => {
  getAllUsers()
    .then((data) => data.json())
    .then((data) => console.log(data));
  return (
    <AppLayout
      usersColumn={
        <GridContainer>
          <UserItem
            id={0}
            firstName="Jan"
            lastName="Testowy"
            email="jan@test.com"
            image="https://robohash.org/facilisdignissimosdolore.png"
            phone="456777666"
            username="jantest1"
          />
          <UserItem
            id={1}
            firstName="Janusz"
            lastName="Próbny"
            email="kontakt@jan.us"
            image="https://robohash.org/doloremquesintcorrupti.png"
            phone="303909990"
            username="janus"
          />
        </GridContainer>
      }
      cartColumn={
        <GridContainer>
          <ProductItem
            id={0}
            title="Super krem"
            price="90"
            discountedPercentage="50"
            discountedPrice="90"
            quantity={2}
            total="180"
          />
          <ProductItem
            id={0}
            title="Super proszek"
            price="79"
            discountedPercentage="79"
            discountedPrice="79"
            quantity={1}
            total="79"
          />
        </GridContainer>
      }
      productColumn={
        <ProductPreview
          id={0}
          title="Super proszek"
          images={[
            "https://i.dummyjson.com/data/products/21/1.png",
            "https://i.dummyjson.com/data/products/21/1.png",
          ]}
        />
      }
    />
  );
};

export default App;
