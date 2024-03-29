import styled from "styled-components";
import SongImage from "../../../../public/ImgProyectoPrueba.jpeg";

export const CurrentSongPlayingInfoContainer = styled.div`
	display: flex;
	gap: 10px;
	height: 100%;
`;

export const CurrentSongPlayingImg = styled.div`
	background-image: url(${SongImage});
	height: 100%;
	width: 60px;
	background-size: cover;
	background-position: center;
	border-radius: 10px;
`;

export const CurrentSongPlayingInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const CurrentSongPlayingName = styled.a`
	cursor: pointer;
	color: white;
	width: 100%;
	transition: 0.25s;
	&:hover {
		border-bottom: 1px solid white;
	}
`;

export const CurrentSongPlayingArtistContainer = styled.div`
	display: flex;
	width: 100%;
`;

export const CurrentSongPlayingArtist = styled.a`
	cursor: pointer;
	color: var(--textColorGray);
	text-align: left;
	&:hover {
		border-bottom: 1px solid white;
		color: white;
	}
`;

export const FavouriteIcon = styled.svg`
	cursor: pointer;
	fill: var(--textColorGray);
	transition: 0.25s;
	&:hover {
		scale: 1.1;
		fill: white;
	}
`;
