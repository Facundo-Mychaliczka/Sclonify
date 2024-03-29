import React from "react";
import { MusicPlaybackWrapper } from "./MusicPlaybackStyles";
import CurrentSongInfo from "./CurrentSongInfo/CurrentSongInfo";
import MultimediaButtons from "./MultimediaButtons/MultimediaButtons";

const MusicPlayback = () => {
	return (
		<MusicPlaybackWrapper>
			<CurrentSongInfo />
			<MultimediaButtons />
			<p>Info de reproducción</p>
		</MusicPlaybackWrapper>
	);
};

export default MusicPlayback;
