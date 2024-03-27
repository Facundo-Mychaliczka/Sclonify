import React from "react";
import {
	ButtonContainer,
	PlayingSongGIF,
	RecentPlayedCard,
	RecentPlayedImage,
	RecentPlayedName,
	RecentPlayedWrapper,
} from "./RightSideRecentPlayedStyles";
import { useSelector } from "react-redux";
import MusicGIF from "../../../../../../public/MusicGIF.gif";

const RighSideRecentPlayed = () => {
	const leftSideWidth = useSelector((state) => state.leftMenu.leftMenu);
	const PlayingSong = "esta";
	return (
		<RecentPlayedWrapper leftMenuWidth={leftSideWidth}>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>{PlayingSong === "esta" ? <PlayingSongGIF src={MusicGIF} alt="" /> : ""}</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>{PlayingSong === "esta" ? <PlayingSongGIF src={MusicGIF} alt="" /> : ""}</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>{PlayingSong === "esta" ? <PlayingSongGIF src={MusicGIF} alt="" /> : ""}</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>{PlayingSong === "esta" ? <PlayingSongGIF src={MusicGIF} alt="" /> : ""}</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>{PlayingSong === "esta" ? <PlayingSongGIF src={MusicGIF} alt="" /> : ""}</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>{PlayingSong === "esta" ? <PlayingSongGIF src={MusicGIF} alt="" /> : ""}</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>{PlayingSong === "esta" ? <PlayingSongGIF src={MusicGIF} alt="" /> : ""}</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>{PlayingSong === "esta" ? <PlayingSongGIF src={MusicGIF} alt="" /> : ""}</ButtonContainer>
			</RecentPlayedCard>
		</RecentPlayedWrapper>
	);
};

export default RighSideRecentPlayed;
