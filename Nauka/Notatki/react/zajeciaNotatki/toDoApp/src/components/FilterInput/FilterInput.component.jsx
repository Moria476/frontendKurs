import { FilterInputField } from "./FilterInput.styled";
import { FilterInputContainer } from "./FilterInput.styled";
import { Input } from "../ui/Input/Input.component";
import Button from "../ui/Button/Button.styled";

const FilterInput = () => {
	return (
		<>
			<h3>Wyszukaj TO DOsa</h3>
			<FilterInputContainer>
				<FilterInputField>
					<Input placeholder={`Search "to do"`} />
				</FilterInputField>
			</FilterInputContainer>
		</>
	);
};

export default FilterInput;
