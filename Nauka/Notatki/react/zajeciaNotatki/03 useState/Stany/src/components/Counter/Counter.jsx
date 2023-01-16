import { useState } from "react";
import { Wrapper, Button, CounterBox } from "./Counter.style";

const Counter = ({ incrementer = 1 }) => {
	const [count, setCount] = useState(0);

	function add() {
		setCount((prevCount) => prevCount + incrementer);
	}
	function subtract() {
		setCount((prevCount) => prevCount - incrementer);
	}
	return (
		<Wrapper>
			<Button disabled={count < 1} onClick={subtract}>
				-
			</Button>
			<CounterBox>{`Ilosc kliknięć: ${count}`}</CounterBox>
			<Button onClick={add}>+</Button>
		</Wrapper>
	);
};
export default Counter;
// ctrl + d
