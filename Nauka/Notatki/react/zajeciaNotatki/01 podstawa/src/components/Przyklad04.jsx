const Przyklad4 = ({
	firstTextPart,
	codePart,
	secondTextPart,
	children,
	className,
}) => {
	return (
		<div
			className={`card${className ? `${className}` : ""}`}
			style={{
				backgroundColor: "grey",
				padding: "10px",
				borderRadius: "5px",
				margin: "10px",
			}}>
			<p>
				{`${firstTextPart} `}
				<code>{codePart}</code>
				{` ${secondTextPart}`}
			</p>
			{children}
		</div>
	);
};
export default Przyklad4;
