import React from "react";
import { PageWrapper } from "../../PageWrapper/PageWrapper";
import Page from "../Page";
import MusicPlayback from "../../MusicPlayback/MusicPlayback";
import RighSideRecentPlayed from "../PageAssets/RightPage/RightSideRecentPlayed/RighSideRecentPlayed";

const Home = () => {
	return (
		<>
			<RighSideRecentPlayed />
			<p style={{ color: "red" }}>hola</p>
		</>
	);
};

export default Home;
