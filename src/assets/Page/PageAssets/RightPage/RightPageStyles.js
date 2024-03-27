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
	margin-top: 150px;
`;
