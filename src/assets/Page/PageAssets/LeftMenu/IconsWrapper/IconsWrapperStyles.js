import styled from "styled-components";

export const IconsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Icon = styled.a`
	background-color: transparent;
	display: flex;
	gap: 10%;
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
	fill: currentColor;
	stroke: #bebfc5;
	transform: rotate(90deg);
`;

export const IconText = styled.p``;

export const LibraryIconsContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 30px;
	margin-top: 15px;
	width: 100%;
	justify-content: space-between;
`;

export const IconLibrary = styled.div`
	display: flex;
	flex-direction: row;
	background-color: transparent;
	gap: 11%;
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
	display: flex;
	flex-direction: row;
	height: 100%;
	gap: 10px;
`;

export const StyledImageLibraryIcon = styled(StyledImageIcon)`
	color: #bebfc5;
	transition: 0.25s;
	cursor: pointer;
	&:hover {
		fill: white;
	}
`;

export const CarrouselFilter = styled.div`
	display: flex;
	color: #bebfc5;
	gap: 10px;
	width: 100%;
	margin: 10px;
	overflow-x: hidden;
	overflow-y: hidden;
`;

export const CarrouselItem = styled.p`
	cursor: pointer;
	text-align: center;
	white-space: nowrap;
	background-color: grey;
	padding: 5px 10px;
	border-radius: 1rem;
	transition: 0.25s;
	width: auto;
	&:hover {
		color: white;
	}
`;
