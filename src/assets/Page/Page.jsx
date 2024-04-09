import React, { Children } from "react";
import { PageContainer } from "./PageStyles";
import LeftMenu from "./PageAssets/LeftMenu/LeftMenu";
import RightPage from "./PageAssets/RightPage/RightPage";

const Page = ({ children }) => {
	return (
		<PageContainer>
			<LeftMenu />
			<RightPage>{children}</RightPage>
		</PageContainer>
	);
};

export default Page;
