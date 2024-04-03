import styled from "styled-components";

export const IconsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 25px;
	height: auto;
	min-height: 30%;
	margin-bottom: 20px;
`;

export const Icon = styled.a`
	background-color: transparent;
	display: flex;
	gap: 30px;
	width: 100%;
	cursor: pointer;
	color: #bebfc5;
	transition: 0.25s;
	height: 30px;
	&:hover {
		color: white;
	}
`;

export const StyledImageIcon = styled.svg`
	fill: currentColor;
`;

export const StyledImageLibrary = styled.svg`
	fill: ${({ menuWidth }) => (menuWidth === "small" ? "none" : "currentColor")};
	min-width: 48px;
	stroke: #bebfc5;
	transform: rotate(90deg);
`;

export const IconText = styled.p``;

export const LibraryIconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 30px;
	margin-top: 5px;
	width: 100%;
	justify-content: space-between;
`;

export const IconLibrary = styled.div`
	display: flex;
	flex-direction: row;
	background-color: transparent;
	gap: 30px;
	width: 90%;
	cursor: pointer;
	color: #bebfc5;
	transition: 0.25s;
	height: 30px;
	transition: 0.25s;
	&:hover {
		color: white;
	}
`;

export const LibraryIconP = styled.p`
	width: 90%;
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
	gap: 10px;
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
	gap: 10px;
	width: 100%;
	margin: 10px;
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
	&:hover {
		color: white;
		background-color: grey;
	}
`;
