const Przyklad1 = () => {
	return (
		<>
			<Welcome1 />
			<Welcome2 />
			<Welcome3 />
			<Welcome4 />
		</>
	);
};

// przed destrukturyzacją ❌❌❌❌
function Welcome1(props) {
	return <h1> Napis przed destruklturyzacją {props.name}</h1>;
}

// po destrukturyzacji ✅✅✅✅
function Welcome2({ name }) {
	return <h1>Napis po destruklturyzacji {name}</h1>;
}

// JAKO ARROW
const Welcome3 = (props) => <h1>Napis z arrow function 1{props.name}</h1>;

const Welcome4 = (props) => {
	return <h1>Napis z arrow function 2 {props.name}</h1>;
};

export default Przyklad1;
