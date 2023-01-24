import { InputField, InputLabel } from "./Input.styled";

export const Input = ({ icon, placeholder, onChange, value }) => {
	return (
		<InputLabel>
			<img src={icon} alt="" />
			<InputField
				placeholder={placeholder}
				type="text"
				value={value}
				onChange={onChange}
			/>
		</InputLabel>
	);
};
