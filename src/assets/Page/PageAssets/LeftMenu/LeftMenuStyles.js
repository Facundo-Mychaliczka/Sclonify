import styled from "styled-components";

const displayFunction = (widthDisplay) => {
	if (widthDisplay === "small") {
		return "10%";
	} else if (widthDisplay === "medium") {
		return "25%";
	} else {
		return "50%";
	}
};

export const LeftMenuContainer = styled.div`
	color: whitesmoke;
	transition: 0.5s;
	background-color: black;
	width: ${({ widthDisplay }) => displayFunction(widthDisplay)};
	height: 100%;
	padding: 15px 20px;
`;
