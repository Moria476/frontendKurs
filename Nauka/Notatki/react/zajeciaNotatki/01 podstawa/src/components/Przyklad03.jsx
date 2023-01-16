const Przyklad3 = ({ url, imgSrc, imgAlt, children }) => {
	return (
		<>
			<a href={url}>
				<img src={imgSrc} alt={imgAlt} />
				{children}
			</a>
		</>
	);
};

export default Przyklad3;
