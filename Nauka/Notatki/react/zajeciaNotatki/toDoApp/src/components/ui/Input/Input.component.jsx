import { InputField, InputLabel } from "./Input.styled";

export const Input = ({ placeholder }) => {
	return (
		<InputLabel>
			<InputField placeholder={placeholder} type="text" />
		</InputLabel>
	);
};
