import React from "react";
import {
	PlaylistItem,
	PlaylistItemDescription,
	PlaylistItemDescriptionContainer,
	PlaylistItemImage,
	PlaylistItemImageContainer,
	PlaylistItemName,
	PlaylistRecentBtn,
	PlaylistsContainer,
	PlaylistsIcon,
	PlaylistsIconsContainer,
} from "./PlaylistWrapperStyles";
import SearchIcon from "../../../../../../public/SearchIcon.svg";
import MenuIcon from "../../../../../../public/MenuIcon.svg";
import ItemImage from "../../../../../../public/ImgProyectoPrueba.jpeg";

const PlaylistsWrapper = () => {
	return (
		<PlaylistsContainer>
			<PlaylistsIconsContainer>
				<PlaylistsIcon src={SearchIcon} />
				<PlaylistRecentBtn>
					Recientes
					<PlaylistsIcon src={MenuIcon} />
				</PlaylistRecentBtn>
			</PlaylistsIconsContainer>
			<PlaylistItem>
				<PlaylistItemImageContainer></PlaylistItemImageContainer>
				<PlaylistItemDescriptionContainer>
					<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
					<PlaylistItemDescription>Artista</PlaylistItemDescription>
				</PlaylistItemDescriptionContainer>
			</PlaylistItem>
			<PlaylistItem>
				<PlaylistItemImageContainer></PlaylistItemImageContainer>
				<PlaylistItemDescriptionContainer>
					<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
					<PlaylistItemDescription>Artista</PlaylistItemDescription>
				</PlaylistItemDescriptionContainer>
			</PlaylistItem>
			<PlaylistItem>
				<PlaylistItemImageContainer></PlaylistItemImageContainer>
				<PlaylistItemDescriptionContainer>
					<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
					<PlaylistItemDescription>Artista</PlaylistItemDescription>
				</PlaylistItemDescriptionContainer>
			</PlaylistItem>
			<PlaylistItem>
				<PlaylistItemImageContainer></PlaylistItemImageContainer>
				<PlaylistItemDescriptionContainer>
					<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
					<PlaylistItemDescription>Artista</PlaylistItemDescription>
				</PlaylistItemDescriptionContainer>
			</PlaylistItem>
			<PlaylistItem>
				<PlaylistItemImageContainer></PlaylistItemImageContainer>
				<PlaylistItemDescriptionContainer>
					<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
					<PlaylistItemDescription>Artista</PlaylistItemDescription>
				</PlaylistItemDescriptionContainer>
			</PlaylistItem>
			<PlaylistItem>
				<PlaylistItemImageContainer></PlaylistItemImageContainer>
				<PlaylistItemDescriptionContainer>
					<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
					<PlaylistItemDescription>Artista</PlaylistItemDescription>
				</PlaylistItemDescriptionContainer>
			</PlaylistItem>
		</PlaylistsContainer>
	);
};

export default PlaylistsWrapper;
