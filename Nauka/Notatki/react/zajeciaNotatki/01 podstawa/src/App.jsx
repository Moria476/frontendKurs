import Przyklad1 from "./components/Przyklad01";
import Przyklad2 from "./components/Przyklad02";
import Przyklad3 from "./components/Przyklad03";
import reactLogo from "../public/react.svg";
import Przyklad4 from "./components/Przyklad04";
import { Przyklad5a, Przyklad5b } from "./components/Przyklad05";
function App() {
	return (
		<>
			<Przyklad1 />
			<Przyklad2 name="tworzymy pierwszy komponent" />
			<Przyklad3
				url="https://vitejs.dev"
				imgSrc="../public/vite.svg"
				imgAlt="Vite logo">
				<p>Children</p>
				<p>Children</p>
				<p>Children</p>
			</Przyklad3>
			<Przyklad3
				url="https://reactjs.org"
				imgSrc={reactLogo}
				imgAlt="React logo"></Przyklad3>

			<Przyklad4
				className="test"
				firstTextPart="Edit"
				codePart="src/App.jsx"
				secondTextPart="and save to test HMR">
				Siemano test
			</Przyklad4>
			<Przyklad4
				firstTextPart="Edit"
				codePart="src/App.jsx"
				secondTextPart="and save to
				test HMR">
				Siemano test2
			</Przyklad4>
			<Przyklad5a />
			<Przyklad5b />
		</>
	);
}
export default App;
