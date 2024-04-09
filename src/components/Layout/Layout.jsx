import React from "react";
import styled from "styled-components";
import { PageWrapper } from "../../assets/PageWrapper/PageWrapper";
import Page from "../../assets/Page/Page";
import MusicPlayback from "../../assets/MusicPlayback/MusicPlayback";

export const LaoutStyled = styled.div`
	height: calc(100vh - 80px);
	margin: 0 auto;
	/* & p {
		text-align: center;
	} */
	/* esto no se toca */
`;

export const ContentStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const Layout = ({ children }) => {
	return (
		<>
			<LaoutStyled>
				<PageWrapper>
					<Page>{children}</Page>
					<MusicPlayback />
				</PageWrapper>
			</LaoutStyled>
		</>
	);
};

export default Layout;
