import Button from "./components/ui/Button/Button.styled";
import { Input } from "./components/ui/Input/Input.component";
import { SingleCard } from "./components/SingleCard/SingleCard.component";
import { BackSVGContainer } from "./components/Background/Background.styled";
import { JobsGrid } from "./components/JobsGrid/JobsGrid.styled";
import ToggleMode from "./components/ui/Toggle/Toggle.component";
import Search from "./components/SearchBar/SearchBar.component";
function App() {
	return (
		<>
			<BackSVGContainer />
			<header>
				<a href="index.html">
					<img src="../public/assets/desktop/logo.svg" alt="devjobs logo" />
				</a>
				<ToggleMode />
			</header>
			<main>
				<Search />
				<JobsGrid>
					<SingleCard
						imgUrl="../public/assets/logos/blogr.svg"
						alt="Blogr company logo"
						howLong="5h ago"
						formOfWork="Part Time"
						profession="Haskell and PureScript Dev"
						companyName="Blogr"
						location="United States"
					/>
					<SingleCard
						imgUrl="../public/assets/logos/officelite.svg"
						alt="Office Lite company logo"
						howLong="20h ago"
						formOfWork="Full Time"
						profession="Senior Software Engineer"
						companyName="Scoot"
						location="United Kingdom"
					/>
					<SingleCard
						imgUrl="../public/assets/logos/scoot.svg"
						alt="Scoot company logo"
						howLong="5h ago"
						formOfWork="Full Time"
						profession="Senior Software Engineer"
						companyName="Scoot"
						location="United Kingdom"
					/>
					<SingleCard
						imgUrl="../public/assets/logos/scoot.svg"
						alt="Scoot company logo"
						howLong="5h ago"
						formOfWork="Full Time"
						profession="Senior Software Engineer"
						companyName="Scoot"
						location="United Kingdom"
					/>
				</JobsGrid>
				<Button>Load more</Button>
			</main>
		</>
	);
}
export default App;
