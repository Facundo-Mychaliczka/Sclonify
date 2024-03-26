import styled from "styled-components";
import ProfileImage from "../../../../../public/FotoCV.jpeg";

const widthRightSide = (righSideWidth) => {
	if (righSideWidth === "small") {
		return "90%";
	} else if (righSideWidth === "medium") {
		return "65%";
	} else {
		return "50%";
	}
};

export const RightSideWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: ${({ righSideWidth }) => widthRightSide(righSideWidth)};
	margin-top: 5px;
`;

export const RightSideNavbar = styled.nav`
	display: flex;
	flex-direction: row;
	position: fixed;
	background-color: transparent;
	border-top-left-radius: 10px;
	justify-content: space-between;
	padding: 5px 20px;
	top: 10px;
	width: ${({ righSideWidth }) => widthRightSide(righSideWidth)};
	height: 60px;
`;

export const ArrowsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	height: 100%;
`;

export const ArrowNavbar = styled.svg`
	cursor: pointer;
	fill: #bebfc5;
	width: 35px;
	max-height: 70%;
	background-color: grey;
	padding: 10px 0px;
	border-radius: 1rem;
	margin: 15px 0px;
	transition: 0.5s;
	&:hover {
		scale: 1.05;
		fill: white;
	}
`;

export const ProfileNavbarContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	height: 100%;
`;
export const DownLoadButton = styled.div`
	cursor: pointer;
	color: white;
	background-color: transparent;
	border-radius: 1rem;
	padding: 5px;
	display: flex;
	flex-direction: row;
	transition: 0.25s;
	&:hover {
		scale: 1.05;
		background-color: gray;
	}
`;

export const DownloadIcon = styled.svg`
	fill: white;
`;

export const StyledImageProfile = styled.div`
	cursor: pointer;
	background-image: url(${ProfileImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 35px;
	width: 35px;
	border-radius: 20rem;
	overflow-x: hidden;
	overflow-y: hidden;
`;
