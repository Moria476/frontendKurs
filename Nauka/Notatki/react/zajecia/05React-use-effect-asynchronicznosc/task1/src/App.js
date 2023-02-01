import { AppLayout } from "./AppLayout/AppLayout";
import { ProductItem } from "./components/ProductItem/ProductItem";
import { ProductPreview } from "./components/ProductPreview/ProductPreview";
import { GridContainer } from "./components/GridContainer/GridContainer";
import { UserItem } from "./components/UserItem/UserItem";
import { delay } from "./delay";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner/Spinner";

const getAllUsers = () => fetch("https://dummyjson.com/users").then(delay(800));
const getUserCarts = (userId) =>
	fetch(`https://dummyjson.com/carts/user/${userId}`).then(delay(400));

const getProductPreview = (productId) =>
	fetch(`https://dummyjson.com/products/${productId}`).then(delay(400));

// const Counter = () => {
//   const [counter, setCounter] = useState(Number(localStorage.counter ?? 0)); // te dwa znaki to jesli jest nullem czy czyms tam to ma dac 0

//   console.log("counter sie renderuje: ", counter);

//   useEffect(() => {
//     console.log("a tutaj się odpala efekt", counter);

//     localStorage.setItem("counter", String(counter));

//     return () => {
//       console.log("a teraz cleanup efektu z counter = ", counter);
//     };
//   }, [counter]);

//   return (
//     <button onClick={() => setCounter((c) => c + 1)}>Klik: {counter}</button>
//   );
// };

const App = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [cart, setCart] = useState(null);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [productPreview, setProductPreview] = useState(null);

	useEffect(() => {
		getAllUsers()
			.then((res) => res.json())
			.then((data) => setUsers(data.users));
	}, []);

	useEffect(() => {
		setCart(null);
		if (selectedUser !== null) {
			getUserCarts(selectedUser)
				.then((res) => res.json())
				.then((data) => {
					const products =
						data.carts.length === 0 ? [] : data.carts[0].products;
					console.log(products);
					setCart(products);
				});
		}
	}, [selectedUser]);

	useEffect(() => {
		setProductPreview(null);
		if (selectedProduct !== null) {
			getProductPreview(selectedProduct)
				.then((res) => res.json())
				.then((data) => setProductPreview(data));
		}
	}, [selectedProduct]);

	return (
		<AppLayout
			usersColumn={
				<GridContainer>
					{users.map((user) => (
						<UserItem
							key={user.id}
							{...user}
							onClick={() => {
								setSelectedUser(user.id);
							}}
						/>
					))}
				</GridContainer>
			}
			cartColumn={
				cart === null ? (
					<Spinner />
				) : (
					<GridContainer>
						{cart.map((product) => (
							<ProductItem
								key={product.id}
								{...product}
								onClick={() => {
									setSelectedProduct(product.id);
								}}
							/>
						))}
					</GridContainer>
				)
			}
			productColumn={
				// <Spinner />
				productPreview && (
					<ProductPreview
						id={productPreview.id}
						title={productPreview.title}
						images={productPreview.images}
					/>
				)
			}
		/>
	);
};

export default App;
