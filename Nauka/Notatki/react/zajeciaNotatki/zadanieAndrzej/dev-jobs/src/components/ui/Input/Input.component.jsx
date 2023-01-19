import { InputField, InputLabel } from "./Input.styled";

export const Input = ({ placeholder, imgUrl }) => {
	return (
		<InputLabel htmlFor={"filterByInfos"}>
			<img src={imgUrl} />
			<InputField placeholder={placeholder} type="text" />
		</InputLabel>
	);
};
