import styled from "styled-components";

const displayFunction = (widthDisplay) => {
	if (widthDisplay === "small") {
		return "10%";
	} else if (widthDisplay === "medium") {
		return "35%";
	} else {
		return "50%";
	}
};

export const LeftMenuContainer = styled.div`
	color: whitesmoke;
	background-color: black;
	/* width: 35%; */
	width: ${({ widthDisplay }) => displayFunction(widthDisplay)};
	/* QUE EL WITH AL EXPANDIR SEA DEL 50% */
	height: 100%;
	padding: 15px 20px;
`;
