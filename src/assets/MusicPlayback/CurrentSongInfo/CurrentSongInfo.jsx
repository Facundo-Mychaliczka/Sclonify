import React from "react";
import {
	CurrentSongPlayingArtist,
	CurrentSongPlayingArtistContainer,
	CurrentSongPlayingImg,
	CurrentSongPlayingInfo,
	CurrentSongPlayingInfoContainer,
	CurrentSongPlayingName,
	FavouriteIcon,
} from "./CurrentSongInfoStyles";

const CurrentSongInfo = () => {
	return (
		<CurrentSongPlayingInfoContainer>
			<CurrentSongPlayingImg></CurrentSongPlayingImg>
			<CurrentSongPlayingInfo>
				<CurrentSongPlayingName>Nombre de canción</CurrentSongPlayingName>
				<CurrentSongPlayingArtistContainer>
					<CurrentSongPlayingArtist>Artista</CurrentSongPlayingArtist>
				</CurrentSongPlayingArtistContainer>
			</CurrentSongPlayingInfo>
			<FavouriteIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
				<path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
			</FavouriteIcon>
		</CurrentSongPlayingInfoContainer>
	);
};

export default CurrentSongInfo;
