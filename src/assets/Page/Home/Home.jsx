import React from "react";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import Page from "../Page";
import MusicPlayback from "../../MusicPlayback/MusicPlayback";

const Home = () => {
	return (
		<>
			<PageWrapper>
				<Page />
				<MusicPlayback />
			</PageWrapper>
		</>
	);
};

export default Home;
