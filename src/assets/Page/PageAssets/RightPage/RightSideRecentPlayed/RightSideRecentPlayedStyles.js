import styled from "styled-components";
import IDImage from "../../../../../../public/ImgProyectoPrueba.jpeg";

export const RecentPlayedWrapper = styled.div`
	color: white;
	width: 100%;
	display: grid;
	grid-template-columns: ${({ leftMenuWidth }) => (leftMenuWidth !== "large" ? "1fr 1fr 1fr 1fr" : "1fr 1fr")};
	grid-gap: 5px;
	align-items: center;
	justify-content: center;
	padding-left: 10px;
	padding-right: 10px;
`;

export const RecentPlayedCard = styled.div`
	cursor: pointer;
	display: flex;
	width: 100%;
	background-color: rgba(190, 191, 197, 0.3);
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	transition: 0.25s;
	border-radius: 10px;
	&:hover {
		background-color: grey;
		scale: 1.05;
	}
`;

export const RecentPlayedImage = styled.div`
	background-image: url(${IDImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 60px;
	width: 70px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	overflow-x: hidden;
	overflow-y: hidden;
`;

export const RecentPlayedName = styled.p`
	font-size: 10px;
	width: 50%;
`;

export const ButtonContainer = styled.div`
	width: 30%;
`;

export const PlayingSongGIF = styled.img`
	width: 30px;
`;

export const MultimediaPauseRecentButton = styled.img`
	width: 40px;
	position: absolute;
	background-color: green;
	border-radius: 10rem;
	opacity: 0;
	transition: 0.25s;
	transform: translate(-35px, 10%);
	&:hover {
		opacity: 1;
		transform: translate(-35px, -10%);
	}
`;

export const MultimediaPlayRecentButton = styled.img`
	width: 40px;
	background-color: green;
	border-radius: 10rem;
	opacity: 0;
	transition: 0.25s;
	transform: translateY(10%);
	&:hover {
		opacity: 1;
		transform: translateY(0);
	}
`;
