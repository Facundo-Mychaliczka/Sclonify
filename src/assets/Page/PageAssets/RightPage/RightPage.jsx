import React from "react";
import {
	ArrowNavbar,
	ArrowsContainer,
	DownLoadButton,
	DownloadIcon,
	ProfileNavbarContainer,
	RightSideNavbar,
	RightSideWrapper,
	StyledImageProfile,
} from "./RightPageStyles";
import { useSelector } from "react-redux";

const RightPage = () => {
	const rightWidth = useSelector((state) => state.leftMenu.leftMenu);
	return (
		<RightSideWrapper righSideWidth={rightWidth}>
			<RightSideNavbar righSideWidth={rightWidth}>
				<ArrowsContainer>
					<ArrowNavbar xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="40" height="40">
						<path d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z" />
					</ArrowNavbar>
					<ArrowNavbar xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="40" height="40">
						<path d="M6.079,22.5a1.5,1.5,0,0,1,.44-1.06l7.672-7.672a2.5,2.5,0,0,0,0-3.536L6.529,2.565A1.5,1.5,0,0,1,8.65.444l7.662,7.661a5.506,5.506,0,0,1,0,7.779L8.64,23.556A1.5,1.5,0,0,1,6.079,22.5Z" />
					</ArrowNavbar>
				</ArrowsContainer>
				<ProfileNavbarContainer>
					<DownLoadButton>
						<DownloadIcon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
							<path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z" />
						</DownloadIcon>
						Instalar app
					</DownLoadButton>
					<ArrowNavbar xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
						<g id="_01_align_center" data-name="01 align center">
							<path d="M23.259,16.2l-2.6-9.371A9.321,9.321,0,0,0,2.576,7.3L.565,16.35A3,3,0,0,0,3.493,20H7.1a5,5,0,0,0,9.8,0h3.47a3,3,0,0,0,2.89-3.8ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm9.165-4.395a.993.993,0,0,1-.8.395H3.493a1,1,0,0,1-.976-1.217l2.011-9.05a7.321,7.321,0,0,1,14.2-.372l2.6,9.371A.993.993,0,0,1,21.165,17.605Z" />
						</g>
					</ArrowNavbar>
					<StyledImageProfile></StyledImageProfile>
				</ProfileNavbarContainer>
			</RightSideNavbar>
		</RightSideWrapper>
	);
};

export default RightPage;
