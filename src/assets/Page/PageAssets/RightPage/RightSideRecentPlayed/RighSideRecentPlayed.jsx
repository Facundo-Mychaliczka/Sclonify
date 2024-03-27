import React from "react";
import {
	ButtonContainer,
	MultimediaPauseRecentButton,
	MultimediaPlayRecentButton,
	PlayingSongGIF,
	RecentPlayedCard,
	RecentPlayedImage,
	RecentPlayedName,
	RecentPlayedWrapper,
} from "./RightSideRecentPlayedStyles";
import { useSelector } from "react-redux";
import MusicGIF from "../../../../../../public/MusicGIF.gif";
import PlayBtnImage from "../../../../../../public/PlayButton.png";
import PauseBtnImage from "../../../../../../public/PauseButton.png";

const RighSideRecentPlayed = () => {
	const leftSideWidth = useSelector((state) => state.leftMenu.leftMenu);
	const PlayingSong = "esta";
	return (
		<RecentPlayedWrapper leftMenuWidth={leftSideWidth}>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>
					{PlayingSong === "esta" ? (
						<>
							<PlayingSongGIF src={MusicGIF} alt="" />
							<MultimediaPauseRecentButton src={PauseBtnImage} />
						</>
					) : (
						<MultimediaPlayRecentButton src={PlayBtnImage} />
					)}
				</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>
					{PlayingSong === "esta" ? (
						<>
							<PlayingSongGIF src={MusicGIF} alt="" />
							<MultimediaPauseRecentButton src={PauseBtnImage} />
						</>
					) : (
						<MultimediaPlayRecentButton src={PlayBtnImage} />
					)}
				</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>
					{PlayingSong === "esta" ? (
						<>
							<PlayingSongGIF src={MusicGIF} alt="" />
							<MultimediaPauseRecentButton src={PauseBtnImage} />
						</>
					) : (
						<MultimediaPlayRecentButton src={PlayBtnImage} />
					)}
				</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>
					{PlayingSong === "esta" ? (
						<>
							<PlayingSongGIF src={MusicGIF} alt="" />
							<MultimediaPauseRecentButton src={PauseBtnImage} />
						</>
					) : (
						<MultimediaPlayRecentButton src={PlayBtnImage} />
					)}
				</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>
					{PlayingSong === "esta" ? (
						<>
							<PlayingSongGIF src={MusicGIF} alt="" />
							<MultimediaPauseRecentButton src={PauseBtnImage} />
						</>
					) : (
						<MultimediaPlayRecentButton src={PlayBtnImage} />
					)}
				</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>
					{PlayingSong === "esta" ? (
						<>
							<PlayingSongGIF src={MusicGIF} alt="" />
							<MultimediaPauseRecentButton src={PauseBtnImage} />
						</>
					) : (
						<MultimediaPlayRecentButton src={PlayBtnImage} />
					)}
				</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>
					{PlayingSong === "esta" ? (
						<>
							<PlayingSongGIF src={MusicGIF} alt="" />
							<MultimediaPauseRecentButton src={PauseBtnImage} />
						</>
					) : (
						<MultimediaPlayRecentButton src={PlayBtnImage} />
					)}
				</ButtonContainer>
			</RecentPlayedCard>
			<RecentPlayedCard>
				<RecentPlayedImage></RecentPlayedImage>
				<RecentPlayedName>NOMBRE DE CANCION</RecentPlayedName>
				<ButtonContainer>
					{PlayingSong === "esta" ? (
						<>
							<PlayingSongGIF src={MusicGIF} alt="" />
							<MultimediaPauseRecentButton src={PauseBtnImage} />
						</>
					) : (
						<MultimediaPlayRecentButton src={PlayBtnImage} />
					)}
				</ButtonContainer>
			</RecentPlayedCard>
		</RecentPlayedWrapper>
	);
};

export default RighSideRecentPlayed;
