import { Toggle, ToggleButton } from "./Toggle.styled";

const ToggleMode = () => {
	return (
		<Toggle>
			<img
				className="toggleIconLeft"
				src="../../../../public/assets/desktop/icon-sun.svg"
				alt="light mode icon"
			/>

			<ToggleButton />
			<img
				className="toggleIconRight"
				src="../../../../public/assets/desktop/icon-moon.svg"
				alt="dark mode icon"
			/>
		</Toggle>
	);
};

export default ToggleMode;
