import styled from "styled-components";
import { StyledImageIcon } from "../IconsWrapper/IconsWrapperStyles";
import ItemImage from "../../../../../../public/ImgProyectoPrueba.jpeg";

export const PlaylistsContainer = styled.div`
	display: flex;
	background-color: transparent;
	opacity: 1;
	flex-direction: column;
	margin-top: ${({ menuWidth }) => (menuWidth !== "small" ? "0px" : "20px")};
	height: 80%;
	gap: 10px;
	overflow-y: scroll;
`;

export const PlaylistsIconsContainer = styled.div`
	background-color: transparent;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 10%;
	width: 100%;
`;

export const PlaylistRecentBtn = styled.div`
	cursor: pointer;
	display: flex;
	color: #bebfc5;
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
	background-color: ${({ active }) => (active ? "gray" : "transparent")};
	height: 70px;
	display: flex;
	flex-direction: row;
	/* padding: 0px 10px; */
	padding: ${({ menuWidth }) => (menuWidth === "small" ? "0px 0px" : "0px 10px")};
	justify-content: ${({ menuWidth }) => (menuWidth === "small" ? "center" : "left")};
	transition: 0.5s;
	&:hover {
		background-color: gray;
		color: white;
	}
`;

export const PlaylistItemImageContainer = styled.div`
	background-image: url(${ItemImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 90%;
	width: 65px;
	border-radius: 20rem;
	overflow-x: hidden;
	overflow-y: hidden;
`;

export const PlaylistItemImage = styled.img`
	height: 50px;
	border-radius: 4rem;
`;

export const PlaylistItemDescriptionContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60%;
	padding: 5%;
	gap: 5px;
`;

export const PlaylistItemName = styled.p`
	text-align: left;
	width: 100%;
`;

export const PlaylistItemDescription = styled.p`
	text-align: left;
	width: 100%;
`;
