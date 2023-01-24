const Layout = ({ children }) => {
	return (
		<>
			<header>
				<h1></h1>
				<Toogle />
			</header>
			<main>{children}</main>
		</>
	);
};

export default Layout;
