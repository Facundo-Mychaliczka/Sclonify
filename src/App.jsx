import MusicPlayback from "./assets/MusicPlayback/MusicPlayback";
import Page from "./assets/Page/Page";
import { PageWrapper } from "./assets/PageWrapper/PageWrapper";

function App() {
	return (
		<>
			<PageWrapper>
				<Page />
				<MusicPlayback />
			</PageWrapper>
		</>
	);
}

export default App;
