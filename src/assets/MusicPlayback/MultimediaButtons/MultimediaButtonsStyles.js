import styled from "styled-components";

export const MultimediaButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MultimediaButtonsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	height: 100%;
`;

export const MultimediaButton = styled.svg`
	cursor: pointer;
	fill: var(--textColorGray);
	width: 35px;
	&:hover {
		fill: white;
	}
`;

export const MultimediaButtonPlayAndPause = styled.svg`
	cursor: pointer;
	fill: white;
	width: 45px;
	transition: 0.25s;
	&:hover {
		scale: 1.1;
	}
`;
