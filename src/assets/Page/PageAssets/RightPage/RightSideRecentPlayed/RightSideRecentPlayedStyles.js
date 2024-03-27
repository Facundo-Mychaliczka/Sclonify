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
	display: flex;
	/* width: 150px; */
	width: 100%;
	background-color: rgba(190, 191, 197, 0.3);
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const RecentPlayedImage = styled.div`
	background-image: url(${IDImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 60px;
	width: 70px;
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
	width: 50%;
`;
