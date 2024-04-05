import styled from "styled-components";
import { StyledImageIcon } from "../IconsWrapper/IconsWrapperStyles";
import ItemImage from "../../../../../../public/ImgProyectoPrueba.jpeg";

export const PlaylistsContainer = styled.div`
	display: flex;
	background-color: transparent;
	opacity: 1;
	flex-direction: column;
	margin-top: ${({ menuWidth }) => (menuWidth !== "small" ? "10px" : "20px")};
	/* height: calc(70% - 80px); */
	height: ${({ menuWidth }) => (menuWidth !== "small" ? "calc(70% - 25px)" : "calc(70% - 30px)")};
	gap: 10px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		background: transparent;
		width: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background: rgba(190, 191, 197, 0.3);
	}
	/* PARA QUE EN PANTALLAS GRANDES NO QUEDE MUCHO ESPACIO ENTRE EL FINAL DE LA LISTA DE PLAYLISTS Y EL MENÚ DE ABAJO  */
	@media (min-height: 740px) {
		height: ${({ menuWidth }) => (menuWidth !== "small" ? "calc(70% - 30px)" : "calc(70% - 30px)")};
	}
`;

export const PlaylistsIconsContainer = styled.div`
	background-color: transparent;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 10%;
	width: 100%;
	padding: 5px;
`;

export const PlaylistRecentBtn = styled.div`
	cursor: pointer;
	gap: 15px;
	display: flex;
	color: #bebfc5;
	font-size: 15px;
	font-weight: 600;
	transition: 0.25s;
	&:hover {
		color: white;
	}
`;

export const PlaylistsIcon = styled(StyledImageIcon)`
	color: #bebfc5;
	background-color: transparent;
	cursor: pointer;
	width: 30px;
	transition: 0.25s;
	&:hover {
		color: white;
	}
`;

export const PlaylistItem = styled.div`
	cursor: pointer;
	padding-top: 20px;
	border-radius: 5px;
	color: #bebfc5;
	width: 100%;
	background-color: ${({ active }) => (active === "true" ? "rgba(190, 191, 197, 0.3)" : "transparent")};
	height: 80px;
	display: flex;
	flex-direction: row;
	/* padding: 0px 10px; */
	padding: ${({ menuWidth }) => (menuWidth === "small" ? "0px 0px" : "10px 10px")};
	justify-content: ${({ menuWidth }) => (menuWidth === "small" ? "center" : "space-between")};
	transition: 0.5s;
	&:hover {
		background-color: rgba(190, 191, 197, 0.3);
		color: white;
	}
`;

export const PlaylistItemImageContainer = styled.div`
	background-image: url(${ItemImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 60px;
	width: 60px;
	border-radius: 20rem;
	overflow-x: hidden;
	overflow-y: hidden;
`;

export const PlaylistItemDescriptionContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 75%;
	padding: 5px 10px;
	gap: 5px;
`;

export const PlaylistItemName = styled.p`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	text-align: left;
	width: 100%;
	font-size: 17px;
	font-weight: 800;
`;

export const PlaylistItemDescription = styled.p`
	text-align: left;
	width: 100%;
`;
