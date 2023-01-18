import Przyklad1 from "./components/Przyklad01/Przyklad01";
import Przyklad2 from "./components/Przyklad02/Przyklad02";
import Przyklad3 from "./components/Przyklad03/Przyklad03";

function App() {
	return (
		<>
			<Przyklad1 active={false} />
			<Przyklad1 active={true} />
			<Przyklad2 />
			<Przyklad3 active={true} />
			<h1>hello world</h1>
		</>
	);
}
export default App;
