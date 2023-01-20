const Layout = ({ children }) => {
	return (
		<>
			<header>
				<h1>Lista rzeczy do zrobienia</h1>
			</header>
			<main>{children}</main>
		</>
	);
};

export default Layout;
