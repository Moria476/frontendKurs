import {
	Button,
	AlternativeButton,
	AlternativeButtonWithAttr,
} from "./Przyklad03.style";
import classnames from "classnames";
const Przyklad3 = (active = true) => {
	return (
		<>
			<Button active={active}>styled-components1</Button>
			<AlternativeButton>styled-components2</AlternativeButton>
			<AlternativeButtonWithAttr>styled-components3</AlternativeButtonWithAttr>
		</>
	);
};

export default Przyklad3;
