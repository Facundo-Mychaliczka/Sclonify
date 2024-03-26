import React from "react";
import { PageContainer } from "./PageStyles";
import LeftMenu from "./PageAssets/LeftMenu/LeftMenu";
import RightPage from "./PageAssets/RightPage/RightPage";

const Page = () => {
	return (
		<PageContainer>
			<LeftMenu />
			<RightPage />
		</PageContainer>
	);
};

export default Page;
