import React from "react";
import { RightSideWrapper } from "./RightPageStyles";
import { useSelector } from "react-redux";
import RightPageNavbar from "./RightSideNavbar/RightPageNavbar";
import RighSideRecentPlayed from "./RightSideRecentPlayed/RighSideRecentPlayed";

const RightPage = () => {
	const leftSideWidth = useSelector((state) => state.leftMenu.leftMenu);
	return (
		<RightSideWrapper righSideWidth={leftSideWidth}>
			<RightPageNavbar />
			<RighSideRecentPlayed />
		</RightSideWrapper>
	);
};

export default RightPage;
