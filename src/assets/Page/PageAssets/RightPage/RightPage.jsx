import React from "react";
import { RightSideWrapper } from "./RightPageStyles";
import { useSelector } from "react-redux";
import RightPageNavbar from "./RightSideNavbar/RightPageNavbar";
import RighSideRecentPlayed from "./RightSideRecentPlayed/RighSideRecentPlayed";
import { ContentStyled } from "../../../../components/Layout/Layout";

const RightPage = ({ children }) => {
	const leftSideWidth = useSelector((state) => state.leftMenu.leftMenu);
	return (
		<RightSideWrapper righSideWidth={leftSideWidth}>
			<RightPageNavbar />
			{/* <RighSideRecentPlayed /> */}
			<ContentStyled>{children}</ContentStyled>
		</RightSideWrapper>
	);
};

export default RightPage;
