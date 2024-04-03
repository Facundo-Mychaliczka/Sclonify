import React from "react";
import {
	PlaylistItem,
	PlaylistItemDescription,
	PlaylistItemDescriptionContainer,
	PlaylistItemImageContainer,
	PlaylistItemName,
	PlaylistRecentBtn,
	PlaylistsContainer,
	PlaylistsIcon,
	PlaylistsIconsContainer,
} from "./PlaylistWrapperStyles";
import { StyledImageIcon } from "../IconsWrapper/IconsWrapperStyles";
import { useSelector } from "react-redux";

const PlaylistsWrapper = () => {
	const leftMenuWidth = useSelector((state) => state.leftMenu.leftMenu);
	return (
		<PlaylistsContainer menuWidth={leftMenuWidth}>
			{leftMenuWidth !== "small" ? (
				<PlaylistsIconsContainer>
					<PlaylistsIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
						<path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z" />
					</PlaylistsIcon>
					<PlaylistRecentBtn>
						Recientes
						<StyledImageIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
							<path d="M320-600q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h480q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H320Zm0 160q-17 0-28.5-11.5T280-480q0-17 11.5-28.5T320-520h480q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H320Zm0 160q-17 0-28.5-11.5T280-320q0-17 11.5-28.5T320-360h480q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H320ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
						</StyledImageIcon>
					</PlaylistRecentBtn>
				</PlaylistsIconsContainer>
			) : (
				""
			)}

			<PlaylistItem active={"true"} menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>PRIMERO</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
			<PlaylistItem menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
			<PlaylistItem menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
			<PlaylistItem menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
			<PlaylistItem menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
			<PlaylistItem menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
			<PlaylistItem menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
			<PlaylistItem menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
			<PlaylistItem menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>IMAGINE DRAGONS</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
			<PlaylistItem menuWidth={leftMenuWidth}>
				{leftMenuWidth !== "small" ? (
					<>
						<PlaylistItemImageContainer></PlaylistItemImageContainer>
						<PlaylistItemDescriptionContainer>
							<PlaylistItemName>ÚLTIMO ITEM</PlaylistItemName>
							<PlaylistItemDescription>Artista</PlaylistItemDescription>
						</PlaylistItemDescriptionContainer>
					</>
				) : (
					<PlaylistItemImageContainer></PlaylistItemImageContainer>
				)}
			</PlaylistItem>
		</PlaylistsContainer>
	);
};

export default PlaylistsWrapper;
