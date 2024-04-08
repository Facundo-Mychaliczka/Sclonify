import styled from "styled-components";

export const IconsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 20px;
	height: auto;
	min-height: 30%;
	/* margin-bottom: 20px; */
`;

export const Icon = styled.a`
	background-color: transparent;
	display: flex;
	gap: 20px;
	width: 100%;
	cursor: pointer;
	color: #bebfc5;
	font-size: 20px;
	font-weight: 800;
	transition: 0.25s;
	height: 30px;
	justify-content: ${({ menuWidth }) => (menuWidth === "small" ? "center" : "")};
	&:hover {
		color: white;
	}
`;

export const StyledImageIcon = styled.svg`
	fill: currentColor;
	height: 30px;
`;

export const StyledImageLibrary = styled.svg`
	fill: ${({ menuWidth }) => (menuWidth === "small" ? "none" : "currentColor")};
	/* min-width: 20px; */
	height: 35px;
	stroke: #bebfc5;
	transform: rotate(90deg);
`;

export const IconText = styled.p``;

export const LibraryIconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	font-size: 20px;
	/* height: 25px; */
	/* margin-top: 5px; */
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const IconLibrary = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	background-color: transparent;
	gap: 20px;
	width: 100%;
	cursor: pointer;
	color: #bebfc5;
	transition: 0.25s;
	transition: 0.25s;
	justify-content: ${({ menuWidth }) => (menuWidth === "small" ? "center" : "")};
	&:hover {
		color: white;
	}
`;

export const LibraryIconP = styled.p`
	display: ${({ menuWidth }) => (menuWidth === "small" ? "none" : "flex")};
	width: 70%;
	font-weight: 800;
	transition: 0.25s;
	text-align: left;
	&:hover {
		color: white;
	}
`;
export const LibraryRightIcons = styled.div`
	display: ${({ menuWidth }) => (menuWidth === "small" ? "none" : "flex")};
	flex-direction: row;
	height: 100%;
	gap: 5px;
`;

export const StyledImageLibraryIcon = styled(StyledImageIcon)`
	color: #bebfc5;
	border-radius: 2rem;
	transition: 0.25s;
	cursor: pointer;
	&:hover {
		fill: white;
		background-color: gray;
	}
`;

export const StyledImageLibraryIconLarge = styled(StyledImageLibraryIcon)`
	transform: rotate(-180deg);
`;

export const CarrouselFilter = styled.div`
	/* display: flex; */
	display: ${({ menuWidth }) => (menuWidth === "small" ? "none" : "flex")};
	flex-direction: row;
	color: #bebfc5;
	align-items: center;
	justify-content: ${({ menuWidth }) => (menuWidth === "large" ? "left" : "")};
	gap: 5px;
	width: 100%;
	/* margin: 10px; */
	padding: 5px;
	transition: 0.5s;
	overflow-x: hidden;
	overflow-y: hidden;
`;

export const CarrouselItem = styled.p`
	cursor: pointer;
	text-align: center;
	white-space: nowrap;
	background-color: rgba(190, 191, 197, 0.3);
	padding: 5px 10px;
	border-radius: 1rem;
	transition: 0.25s;
	width: auto;
	font-size: 15px;
	&:hover {
		color: white;
		background-color: grey;
	}
`;
