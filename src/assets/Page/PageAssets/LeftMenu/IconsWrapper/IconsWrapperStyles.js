import styled from "styled-components";

export const IconsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	height: 40%;
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

export const StyledImageIcon = styled.img`
	filter: invert(98%) sepia(1%) saturate(3042%) hue-rotate(187deg) brightness(85%) contrast(78%);
	max-height: 100%;
	&:hover {
		filter: invert(100%) sepia(71%) saturate(290%) hue-rotate(10deg) brightness(109%) contrast(107%);
	}
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
	transition: 0.25s;
	cursor: pointer;
	height: ${({ plus }) => (plus ? "15px" : "20px")};
`;

export const CarrouselFilter = styled.div`
	display: flex;
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
